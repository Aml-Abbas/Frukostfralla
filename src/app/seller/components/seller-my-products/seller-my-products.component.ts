import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../services/products.service';
import {Product} from '../../../model/Product';
import {ProductEditorService} from '../../services/product-editor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from '../../../model/item.model';

@Component({
  selector: 'app-seller-my-products',
  templateUrl: './seller-my-products.component.html',
  styleUrls: ['./seller-my-products.component.scss']
})
export class SellerMyProductsComponent implements OnInit {

  title = 'Mina frallor';

  items: Item[] = [];

  constructor(private productsService: ProductsService,
              private productEditorService: ProductEditorService,
              private router: Router,
              private aRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = this.productsService.getProductsBySeller('');
  }

  onItemClick(id: string) {
    this.productEditorService.setEditing(true);
    this.productEditorService.setProductId(id);
    this.router.navigate(['../product-editor'],
      {relativeTo: this.aRouter}).then(result => {

    })
  }


}
