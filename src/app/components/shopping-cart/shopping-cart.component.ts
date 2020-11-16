import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ShoppingCartItem} from '../../model/ShoppingCartItem';

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
  loggedIn = true;

  shoppingCartItems: ShoppingCartItem[];

  amount = 1;

  constructor(location: Location, router: Router, public dialog: MatDialog) {
    this.router = router;
    this.location = location;
    this.shoppingCartItems = [];
    this.getShoppingCartItems('dummy_userid');
  }

  ngOnInit(): void {
  }

  getShoppingCartItems(userid: string): void {
    //  Dummy data
    for (let i = 0; i < 4; i++) {
      this.shoppingCartItems.push(
        new ShoppingCartItem(
          'a' + (i * 3),
          'Fralla ' + (i + 1),
          10,
          1
        )
      );
    }
  }

  incrementAmount(itemId: string): void {
    let filter = this.shoppingCartItems.filter(e => {
      return e.itemId == itemId;
    });
    filter[0].incrementAmount();
  }

  decrementAmount(itemId: string): void {
    let filter = this.shoppingCartItems.filter(e => {
      return e.itemId == itemId;
    });
    filter[0].decrementAmount();
  }

  navigateBack(): void {
    this.location.back();
  }

  onDelete(itemId: string): void {
    //  TODO: Remove the item from the database
    let filter = this.shoppingCartItems.filter(e => {
      return e.itemId == itemId;
    })
    const index = this.shoppingCartItems.indexOf(filter[0], 0);
    if (index > -1) {
      this.shoppingCartItems.splice(index, 1);
    }
  }

  onConfirm(): void {
    if (this.loggedIn) {
    //  TODO: Place the order and navigate to the "Thanks for your order" screen
      this.router.navigate(['/final-order-confirmation'], {replaceUrl: true});
    } else {
    //  TODO: Give the user the option to login, signup or place the order without logging in
    //  If the user chooses the latter make the user enter their info
    //  a.k.a navigate to conformation-no-login
      this.router.navigate(['/confirmation-no-login'], {replaceUrl: true});

    }
  }

}
