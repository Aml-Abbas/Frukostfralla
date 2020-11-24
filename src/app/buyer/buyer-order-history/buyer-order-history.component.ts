import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {ShoppingCartItem} from '../../model/ShoppingCartItem';

@Component({
  selector: 'app-buyer-order-history',
  templateUrl: './buyer-order-history.component.html',
  styleUrls: ['./buyer-order-history.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerOrderHistoryComponent implements OnInit {
  title = 'Mina beställningar';

  location: Location;
  router: Router;
  items: ShoppingCartItem[] = [];

  amount = 1;

  total = 0;

  constructor(location: Location, router: Router) {
    this.location = location;
    this.router = router;
    this.getShoppingCartItems('dummy_userid');
  }

  ngOnInit(): void {
  }

  getShoppingCartItems(userid: string): void {
    //  Dummy data
    for (let i = 0; i < 4; i++) {
      this.items.push(
        new ShoppingCartItem(
          'a' + (i * 3),
          'Fralla ' + (i + 1),
          10,
          1
        )
      );
    }
    this.countTotal()
  }

  countTotal(){
    this.total = 0;
    for (let item of this.items) {
      this.total += item.price * item.amount;
    }
  }

  public navigateBack(): void {
    this.location.back();
  }
}
