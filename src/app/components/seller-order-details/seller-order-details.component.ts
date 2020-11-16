import {Component, Input, OnInit} from '@angular/core';
import {OrderDetailsService} from '../../../services/order-details.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {SellerOrderDetailsProduct} from '../../model/SellerOrderDetailsProduct';


@Component({
  selector: 'app-seller-order-details',
  templateUrl: './seller-order-details.component.html',
  styleUrls: ['./seller-order-details.component.scss']
})
export class SellerOrderDetailsComponent implements OnInit {
  location: Location;
  router: Router;

  orderId: string;
  title = '';

  buyer: string;
  address: string;
  mobileNumber: string;
  total: number;
  products: SellerOrderDetailsProduct[] = [];

  constructor(location: Location, router: Router, private orderDetails: OrderDetailsService) { }

  ngOnInit(): void {
    this.orderDetails.currentOrderId$.subscribe(orderId => this.orderId = orderId);
    console.log("order id = " + this.orderId);
    this.title = 'Beställning #' + this.orderId;
  }

  navigateBack(): void {
    this.location.back();
  }

  fetchOrderDetails(orderId: string) {

  }


}
