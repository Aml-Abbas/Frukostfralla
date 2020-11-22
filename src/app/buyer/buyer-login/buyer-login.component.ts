import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-buyer-login',
  templateUrl: './buyer-login.component.html',
  styleUrls: ['./buyer-login.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerLoginComponent implements OnInit {

  router: Router;

  title = 'Välkommen';
  email = '';
  enteredPassword = '';
  hide = true;
  location: Location;

  constructor(router: Router, location: Location,  private aRoute: ActivatedRoute) {
    this.router = router;
    this.location = location;

  }

  ngOnInit(): void {
  }

  public login(): void {
    // log in if credentials are correct
    if (this.checkCred()) {
      this.router.navigate(
        ['../seller-my-products'],
        {replaceUrl: true, relativeTo: this.aRoute});
    }
  }

  public checkCred(): boolean {
    return true;
  }
  public navigateBack(): void {
    this.location.back();
  }
}
