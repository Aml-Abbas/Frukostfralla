import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-confirmation-no-login',
  templateUrl: './confirmation-no-login.component.html',
  styleUrls: ['./confirmation-no-login.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class ConfirmationNoLoginComponent implements OnInit {

  router: Router;
  location: Location;

  title = 'Bekräftelse';
  email = '';
  enteredPassword = '';
  hide = true;

  constructor(router: Router, location: Location) {
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
