import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order-login-or-not',
  templateUrl: './order-login-or-not.component.html',
  styleUrls: ['./order-login-or-not.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class OrderLoginOrNotComponent implements OnInit {


  router: Router;
  location: Location;

  title = 'Bekräftelse';
  email = '';
  enteredPassword = '';
  hide = true;

  constructor(router: Router, location: Location, private aRoute: ActivatedRoute) {
    this.router = router;
    this.location = location;


  }

  ngOnInit(): void {
  }

  public login(): void {
    // log in if credentials are correct
    if (this.checkCred()) {
      this.router.navigate(
        ['../confirmation-login'],
        {replaceUrl: true, relativeTo: this.aRoute});
    }
  }

  public checkCred(): boolean {
    return true;
  }
  public navigateBack(): void {
    // Navigate back to to seller start page without pushing this page to history
    this.location.back();
  }
}
