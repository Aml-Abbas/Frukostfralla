import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ShoppingCartItem} from '../../../model/ShoppingCartItem';
import {Item} from '../../../model/item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ShoppingCartComponent implements OnInit {

  router: Router;
  location: Location;

  title = 'Din varukorg';

  cartItems: Item[] = [];

  amount = 1;

  total = 0;

  deliveryDates = [];

  constructor(location: Location,
              private aRoute: ActivatedRoute,
              router: Router, public dialog: MatDialog) {
    this.router = router;
    this.location = location;
  }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cart'));
    this.countTotal();
    console.log(this.cartItems);
  }

  incrementAmount(item: Item): void {
    this.cartItems.filter(e => {
      if (e.itemId == item.itemId) {
        e.count++;
      }
    })
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.countTotal();
  }

  decrementAmount(itemId: number): void {
    let count = 0;
    let filter = this.cartItems.filter(e => {
      if (e.itemId == itemId) {
        e.count--;
        count = e.count;
      }
      return e.itemId == itemId;
    });
    if (count < 1) {
      this.cartItems.splice(this.cartItems.indexOf(filter[0]), 1);
    }
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.countTotal();
  }

  navigateBack(): void {
    this.location.back();
  }

  onDelete(itemId: number): void {
    //  TODO: Remove the item from the database
    let filter = this.cartItems.filter(e => {
      return e.itemId == itemId;
    });
    const index = this.cartItems.indexOf(filter[0], 0);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
    this.countTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  onConfirm(): void {
    //  TODO: Place the order and navigate to the "Thanks for your order" screen
    this.router.navigate(
      ['../confirmation-login'],
      {replaceUrl: true, relativeTo: this.aRoute});

    /* } else {
     //  TODO: Give the user the option to login, signup or place the order without logging in
     //  If the user chooses the latter make the user enter their info
     //  a.k.a navigate to conformation-no-login
       this.router.navigate(
         ['../order-login-or-not'],
         {replaceUrl: true, relativeTo: this.aRoute});
     }*/
  }

  countTotal() {
    this.total = 0;
    for (let item of this.cartItems) {
      this.total += item.price * item.count;
    }
  }
}
