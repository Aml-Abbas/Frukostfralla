import {Component, Input, OnInit} from '@angular/core';
import {OrderDetailsService} from '../../../services/order-details.service';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {SellerOrderDetailsProduct} from '../../model/SellerOrderDetailsProduct';
import {SellerWeekOrdersItemDetails} from '../../model/SellerWeekOrdersItemDetails';


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

  itemDetails: SellerWeekOrdersItemDetails;

  constructor(location: Location, router: Router,
              private orderDetailsService: OrderDetailsService) {
    this.location = location;
    this.router = router;
  }

  ngOnInit(): void {
    this.orderDetailsService.currentOrderId$.subscribe(orderId => this.orderId = orderId);
    console.log('order id = ' + this.orderId);
    this.title = 'Beställning #' + this.orderId;
    this.itemDetails = this.orderDetailsService.fetchOrdersItemDetails();
  }

  navigateBack(): void {
    this.location.back();
  }

}
