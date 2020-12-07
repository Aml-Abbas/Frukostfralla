import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/Product';
import {ProductsService} from '../../../../services/products.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ShoppingCartItem} from '../../../model/ShoppingCartItem';
import {Item} from '../../../model/item.model';
import {StorageMap} from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-buyer-products',
  templateUrl: './buyer-products.component.html',
  styleUrls: ['./buyer-products.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerProductsComponent implements OnInit {

  title: string = 'Säljarens frallor';

  items: Item[] = [];

  sellerId: string;

  cartItems: Item[] = [];

  constructor(private router: Router,
              private location: Location,
              private aRoute: ActivatedRoute,
              private productsService: ProductsService,
              private storage: StorageMap) {
  }

  ngOnInit(): void {
    this.productsService.currentSellerId$.subscribe(id => this.sellerId = id);
    this.title = this.productsService.getSellerName(this.sellerId) + '(s) frallor';
    this.items = this.productsService.getProductsBySeller(this.sellerId);
    if (JSON.parse(localStorage.getItem('cart')) !== null) {
      this.cartItems = JSON.parse(localStorage.getItem('cart'));
    }
  }

  public navigateBack(): void {
    this.location.back();
  }

  addToCart(item: Item): void {
    let filter = this.cartItems.filter(e => {
      if (e.itemId == item.itemId) {
        e.count++;
      }
      return e.itemId == item.itemId;
    });
    if (filter.length <= 0) {
      this.cartItems.push(item);
    }
    console.log(this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
