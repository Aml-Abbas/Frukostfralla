import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class MapComponent implements OnInit {
  router: Router;

  title = 'Säljare i ditt område';
  location: Location;

  username = 'User';

  lat = 0;
  lng = 0;

  constructor(router: Router, location: Location, private _http: HttpClient) {
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
