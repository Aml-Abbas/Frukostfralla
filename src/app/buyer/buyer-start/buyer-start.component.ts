import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BuyerStartService} from '../../../services/buyer-start.service';

@Component({
  selector: 'app-buyer-start',
  templateUrl: './buyer-start.component.html',
  styleUrls: ['./buyer-start.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerStartComponent implements OnInit {
router: Router;
  location: Location;

  title = 'Välkommen - Välj stad';
  email = '';
  enteredPassword = '';
  hide = true;
  city: string;

  constructor(router: Router, location: Location, private aRoute: ActivatedRoute, private buyerStartService: BuyerStartService) {
    this.router = router;
    this.location = location;


  }

  ngOnInit(): void {
  }

  public login(): void {
    // log in if credentials are correct
    if (this.checkCred()) {
      this.router.navigate(
        ['../buyer-profile'],
        {replaceUrl: true, relativeTo: this.aRoute});

    }
  }

  public checkCred(): boolean {
    return true;
  }

  findCity() {
    this.buyerStartService.setCity(this.city);
    this.router.navigate(
      ['../sellers'],
      {replaceUrl: true, relativeTo: this.aRoute});
  }
  public navigateBack(): void {
    // Navigate back to to seller start page without pushing this page to history
    this.location.back();
  }

}
