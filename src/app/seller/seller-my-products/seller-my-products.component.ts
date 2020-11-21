import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {Product} from '../../model/Product';

@Component({
  selector: 'app-seller-my-products',
  templateUrl: './seller-my-products.component.html',
  styleUrls: ['./seller-my-products.component.scss']
})
export class SellerMyProductsComponent implements OnInit {

  title = 'Mina frallor';

  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProductsBySeller('');
  }


}
