import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {SellerWeekOrdersItem} from '../../model/SellerWeekOrdersItem';

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
  orders: SellerWeekOrdersItem[];

  constructor(location: Location, router: Router) {
    this.location = location;
    this.router = router;
    this.orders = [];
    this.fetchSellerWeekOrders();
  }

  ngOnInit(): void {
  }

  public navigateBack(): void {
    this.location.back();
  }

  fetchSellerWeekOrders(): void {
    for (let i = 0; i < 10; i++) {
      this.orders.push(
        new SellerWeekOrdersItem('Köpare ' + (i + 1), (i + 9).toString(), 30, "Fralla")
      );
    }
  }

  public navigateToSellerOrderHistory(): void {

  }


}
