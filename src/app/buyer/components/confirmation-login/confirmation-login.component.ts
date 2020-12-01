import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-confirmation-login',
  templateUrl: './confirmation-login.component.html',
  styleUrls: ['./confirmation-login.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class ConfirmationLoginComponent implements OnInit {

  router: Router;
  location: Location;

  title = 'Bekräftelse';
  email = '';
  enteredPassword = '';
  hide = true;

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
