import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-order-no-login',
  templateUrl: './order-no-login.component.html',
  styleUrls: ['./order-no-login.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class OrderNoLoginComponent implements OnInit {


  router: Router;

  title = 'Bekräftelse';
  name = '';
  street = '';
  city = '';
  number = '';
  hide = true;
  location: Location;

  constructor(router: Router, location: Location,private aRoute: ActivatedRoute) {
    this.router = router;
    this.location = location;

  }

  ngOnInit(): void {
  }
  public navigateBack(): void {
    // Navigate back to to seller start page without pushing this page to history
    this.location.back();
  }
}
