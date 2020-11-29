import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {MapsAPILoader} from "@agm/core";

// declare const google: any;


@Component({
  selector: 'app-map',
  templateUrl: './buyer-map.component.html',
  styleUrls: ['./buyer-map.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerMapComponent implements OnInit {
  @ViewChild('search')
  public searchElementRef: ElementRef;

  router: Router;

  location: Location;
  username = 'User';
  lat = 0;
  lng = 0;
  drawingManager: any;
  selectedPointLatitude: any;
  selectedPointLongitude: any;

  zoom: number;
  address: string;
  private geoCoder;

  constructor(router: Router, location: Location,
              private mapsLoader: MapsAPILoader,
              private ngZone: NgZone) {
    this.router = router;
    this.location = location;
  }

  ngOnInit(): void {

    this.mapsLoader.load().then(() => {
      this.getLocation();
      this.geoCoder = new google.maps.Geocoder;
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
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
        })
      })
    });
  }

  getLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((position => {
        console.log('lat: ' + position.coords.latitude);
        console.log('lng: ' + position.coords.longitude);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.lat, this.lng);
      }));
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
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
    this.location.back();
  }

}
