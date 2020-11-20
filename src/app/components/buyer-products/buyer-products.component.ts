import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {ProductsService} from '../../../services/products.service';

@Component({
  selector: 'app-buyer-products',
  templateUrl: './buyer-products.component.html',
  styleUrls: ['./buyer-products.component.scss']
})
export class BuyerProductsComponent implements OnInit {

  title: string = 'Säljarens frallor';

  products: Product[] = [];

  sellerId: string;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.currentSellerId$.subscribe(id => this.sellerId = id);
    this.title = this.productsService.getSellerName(this.sellerId) + '(s) frallor';
    this.products = this.productsService.getProductsBySeller(this.sellerId);
  }
}
