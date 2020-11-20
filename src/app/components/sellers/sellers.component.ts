import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {

  title = 'Säljare i din närhet';

  router: Router;
  constructor(router: Router, private productsService: ProductsService) {
    this.router = router;
  }

  ngOnInit(): void {

  }

  onItemClick(sellerId: string) {
    this.productsService.setSellerId(sellerId);
    this.router.navigate(['/buyer-products']).then(result => {
      console.log(result.valueOf());
    })
  }

}
