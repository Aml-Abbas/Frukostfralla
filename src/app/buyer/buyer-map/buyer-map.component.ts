import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

declare const google: any;


@Component({
  selector: 'app-map',
  templateUrl: './buyer-map.component.html',
  styleUrls: ['./buyer-map.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerMapComponent implements OnInit {
  router: Router;

  title = 'Säljare i ditt område';
  location: Location;
  username = 'User';
  lat = 0;
  lng = 0;
  drawingManager: any;
  selectedPointLatitude: any;
  selectedPointLongitude: any;

  constructor(router: Router, location: Location, private http: HttpClient) {
    this.router = router;
    this.location = location;
  }
  ngOnInit(): void {
    this.get();
  }

  get(): void{
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition((position => {
        console.log('lat: ' + position.coords.latitude);
        console.log('lng: ' + position.coords.longitude);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      }));
    }
  }

  public navigateBack(): void {
    this.location.back();
  }

}
