import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-week-orders',
  templateUrl: './seller-week-orders.component.html',
  styleUrls: ['./seller-week-orders.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class SellerWeekOrdersComponent implements OnInit {
  title = 'Beställningar';

  location: Location;
  router: Router;

  constructor(location: Location, router: Router) {
    this.location = location;
    this.router = router;

  }

  ngOnInit(): void {
  }

  public navigateBack(): void {
    this.location.back();
  }

  public navigateToSellerOrderHistory(): void {

  }
}
