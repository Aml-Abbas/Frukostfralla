import { Component, OnInit } from '@angular/core';
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


  constructor(router: Router, location: Location) {
    this.router = router;
    this.location = location;
  }

  ngOnInit(): void {
  }


  public navigateBack(): void {
    this.location.back();
  }
}
