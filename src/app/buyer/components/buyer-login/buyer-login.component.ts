import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BuyerAuthService} from '../../services/buyer-auth.service';


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

  loginUserData = {};

  constructor(router: Router, location: Location,
              private aRoute: ActivatedRoute,
              private authService: BuyerAuthService) {
    this.router = router;
    this.location = location;

  }

  ngOnInit(): void {
  }

  public login(): void {
    // log in if credentials are correct
    /*
        if (this.checkCred()) {
          this.authService.signIn(this.email, this.enteredPassword);
          this.router.navigate(
            ['../buyer-products'],
            {replaceUrl: true, relativeTo: this.aRoute});
        }
    */
    this.authService.signIn(this.email, this.enteredPassword)
      .subscribe(
        res => {
          localStorage.setItem('token', res.authorization);
          console.log("token: " +  res.authorization);
        },
        err => console.log(err)
      );
    this.router.navigate(
      ['../buyer-products'],
      {replaceUrl: true, relativeTo: this.aRoute});

  }

  public checkCred(): boolean {
    return true;
  }

  public navigateBack(): void {
    this.location.back();
  }
}
