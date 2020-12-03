import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BakeriesService} from '../../../../services/bakeries.service';
import {Bakery} from '../../../model/Bakery';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SellerSignupService} from '../../services/seller-signup.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LocationService} from '../../../../services/location.service';
import {MapsAPILoader} from '@agm/core';
import {SellerAuthService} from '../../services/seller-auth.service';

declare const google: any;

@Component({
  selector: 'app-seller-create-profile',
  templateUrl: './seller-create-profile.component.html',
  styleUrls: ['./seller-create-profile.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})

export class SellerCreateProfileComponent implements OnInit {
  @ViewChild('search')
  public searchElementRef: ElementRef;

  title = 'Skapa profil';
  hide = true;

  email = '';
  name = '';
  mobile = '';
  enteredPassword = '';
  enteredPassword2 = '';

  chosenBakery: Bakery;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  lat = 0;
  lng = 0;
  zoom = 10;
  address = '';
  private geoCoder;

  pointList: { lat: number; lng: number }[] = [];
  drawingManager: any;
  selectedShape: any;
  selectedArea = 0;

  emailControl = new FormControl('', [Validators.email]);
  mobileControl = new FormControl(0, [
    Validators.minLength(10),
    Validators.maxLength(10)
  ]);


  constructor(private router: Router,
              private location: Location,
              private bakeryService: BakeriesService,
              private snackBar: MatSnackBar,
              private aRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private authService: SellerAuthService,
              private locationService: LocationService,
              private mapsLoader: MapsAPILoader,
              private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.bakeryService.currentBakery$.subscribe(bakery => this.chosenBakery = bakery);
    this.locationService = new LocationService();
    this.locationService.currentLat$.subscribe(lat => {
      this.lat = lat;
    });
    this.locationService.currentLng$.subscribe(lng => {
      this.lng = lng;
    });
    this.mapsLoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
      this.getAddress(this.lat, this.lng);
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          let place = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({'location': {lat: latitude, lng: longitude}}, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  public navigateBack(): void {
    // Navigate back to to seller start page without pushing this page to history
    this.location.back();
  }

  onCreate(): void {
    console.log('Email: ' + this.email);
    console.log('Name: ' + this.name);
    console.log('Mobile: ' + this.mobile);
    console.log('Pass: ' + this.enteredPassword);
    console.log('Pass2: ' + this.enteredPassword2);
    if (this.enteredPassword != this.enteredPassword2
      || this.email == '' || this.name == '' || this.mobile == '') {
      this.snackBar.open('Rätta felen.', 'Ok', {
        duration: 2000
      });
    } else {
      this.router.navigate(
        ['../seller-profile'],
        {replaceUrl: true, relativeTo: this.aRoute});
      this.authService.signUp();
    }
  }

  onChooseBakery(): void {
    this.bakeryService.setFrom('./seller-create-profile');
    this.router.navigate(['/choose-bakery']);
  }

  onMapReady(map): void {
    this.initDrawingManager(map);
  }

  initDrawingManager = (map: any) => {
    const self = this;
    const options = {
      drawingControl: true,
      drawingControlOptions: {
        drawingModes: ['polygon'],
      },
      polygonOptions: {
        draggable: true,
        editable: true,
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
    };
    this.drawingManager = new google.maps.drawing.DrawingManager(options);
    this.drawingManager.setMap(map);
    google.maps.event.addListener(
      this.drawingManager,
      'overlaycomplete',
      (event) => {
        if (event.type === google.maps.drawing.OverlayType.POLYGON) {
          const paths = event.overlay.getPaths();
          for (let p = 0; p < paths.getLength(); p++) {
            google.maps.event.addListener(
              paths.getAt(p),
              'set_at',
              () => {
                if (!event.overlay.drag) {
                  self.updatePointList(event.overlay.getPath());
                }
              }
            );
            google.maps.event.addListener(
              paths.getAt(p),
              'insert_at',
              () => {
                self.updatePointList(event.overlay.getPath());
              }
            );
            google.maps.event.addListener(
              paths.getAt(p),
              'remove_at',
              () => {
                self.updatePointList(event.overlay.getPath());
              }
            );
          }
          self.updatePointList(event.overlay.getPath());
          this.selectedShape = event.overlay;
          this.selectedShape.type = event.type;
        }
        if (event.type !== google.maps.drawing.OverlayType.MARKER) {
          // Switch back to non-drawing mode after drawing a shape.
          self.drawingManager.setDrawingMode(null);
          // To hide:
          self.drawingManager.setOptions({
            drawingControl: false,
          });
        }
      }
    );
  };

  deleteSelectedShape() {
    if (this.selectedShape) {
      this.selectedShape.setMap(null);
      this.selectedArea = 0;
      this.pointList = [];
      // To show:
      this.drawingManager.setOptions({
        drawingControl: true,
      });
    }
  }

  updatePointList(path) {
    this.pointList = [];
    const len = path.getLength();
    for (let i = 0; i < len; i++) {
      this.pointList.push(
        path.getAt(i).toJSON()
      );
    }
    this.selectedArea = google.maps.geometry.spherical.computeArea(
      path
    );
  }
}
