import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {Router} from '@angular/router';
import {Seller} from '../../model/Seller';
import {BuyerStartService} from '../../../services/buyer-start.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {

  title = 'Säljare i din närhet';
  sellers: Seller[]=[];

  router: Router;
  city:string;

  constructor(router: Router, private productsService: ProductsService, private BuyerStartService: BuyerStartService) {
    this.router = router;
  }

  ngOnInit(): void {
    this.city= this.BuyerStartService.getCity();
  }

  onItemClick(sellerId: string) {
    this.BuyerStartService.currentCity$.subscribe(city => this.city= city);
    this.productsService.setSellerId(sellerId);
    this.router.navigate(['/buyer-products']).then(result => {
      console.log(result.valueOf());
    })
  }

}
