import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BuyerAuthService} from '../../services/buyer-auth.service';

@Component({
  selector: 'app-buyer-signup',
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerSignupComponent implements OnInit {

  title = 'Skapa profil';
  hide = true;

  email = '';
  name = '';
  mobile = '';
  enteredPassword = '';
  enteredPassword2 = '';

  constructor(private router: Router,
              private location: Location,
              private aRoute: ActivatedRoute,
              private authService: BuyerAuthService) {
  }

  ngOnInit(): void {
  }

  public navigateToStart(): void {
    // Navigate back to to seller start page without pushing this page to history
    this.router.navigate(['../buyer-start'],
      {replaceUrl: true, relativeTo: this.aRoute});
  }


  signUp() {
    this.authService.signUp();
    this.router.navigate(['../buyer-products'],
      {relativeTo: this.aRoute, replaceUrl: true})
  }
}
