import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../services/products.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Seller} from '../../../model/Seller';
import {BuyerStartService} from '../../services/buyer-start.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class SellersComponent implements OnInit {

  title = 'Säljare i din närhet';
  sellers: Seller[]=[];
  location: Location;

  router: Router;
  city:string;

  constructor(router: Router, private aRoute: ActivatedRoute, location: Location,private productsService: ProductsService, private BuyerStartService: BuyerStartService) {
    this.router = router;
    this.location = location;

  }

  ngOnInit(): void {
    this.city= this.BuyerStartService.getCity();
  }

  onItemClick(sellerId: string) {
    this.BuyerStartService.currentCity$.subscribe(city => this.city= city);
    this.productsService.setSellerId(sellerId);
      this.router.navigate(
        ['../buyer-products'],
        {replaceUrl: true, relativeTo: this.aRoute});

  }
  public navigateBack(): void {
    // Navigate back to to seller start page without pushing this page to history
    this.location.back();
  }
}
