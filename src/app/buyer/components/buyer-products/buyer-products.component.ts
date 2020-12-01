import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/Product';
import {ProductsService} from '../../../../services/products.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-buyer-products',
  templateUrl: './buyer-products.component.html',
  styleUrls: ['./buyer-products.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerProductsComponent implements OnInit {

  title: string = 'Säljarens frallor';

  products: Product[] = [];
  router: Router;

  sellerId: string;
  location: Location;


  constructor(router: Router,location: Location, private aRoute: ActivatedRoute, private productsService: ProductsService) {
    this.router = router;
    this.location = location;
  }

  ngOnInit(): void {
    this.productsService.currentSellerId$.subscribe(id => this.sellerId = id);
    this.title = this.productsService.getSellerName(this.sellerId) + '(s) frallor';
    this.products = this.productsService.getProductsBySeller(this.sellerId);
  }
  public navigateBack(): void {
    this.location.back();
  }
  addToCart(id: string): void{

}
}
