import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {ProductsService} from '../../../services/products.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  selector: 'app-buyer-products',
  templateUrl: './buyer-products.component.html',
  styleUrls: ['./buyer-products.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerProductsComponent implements OnInit {

  title: string = 'Säljarens frallor';

  products: Product[] = [];

  sellerId: string;
  location: Location;


  constructor(location: Location, private productsService: ProductsService) { }

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
