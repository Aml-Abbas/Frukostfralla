import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buyer-signup',
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerSignupComponent implements OnInit {

  title = 'Skapa profil';
  router: Router;
  hide = true;

  email = '';
  name = '';
  mobile = '';
  enteredPassword = '';
  enteredPassword2 = '';
  location: Location;

  constructor(router: Router, location: Location,private aRoute: ActivatedRoute) {
    this.router = router;
    this.location = location;

  }

  ngOnInit(): void {
  }

  public navigateToStart(): void {
    // Navigate back to to seller start page without pushing this page to history
    this.router.navigate(['../buyer-start'],
      {replaceUrl: true, relativeTo: this.aRoute});
  }


}
