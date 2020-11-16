import {Component, Input, OnInit} from '@angular/core';
import {OrderDetailsService} from '../../../services/order-details.service';

@Component({
  selector: 'app-seller-order-details',
  templateUrl: './seller-order-details.component.html',
  styleUrls: ['./seller-order-details.component.scss']
})
export class SellerOrderDetailsComponent implements OnInit {

  orderId: string;

  constructor(private orderDetails: OrderDetailsService) { }

  ngOnInit(): void {
    this.orderDetails.currentOrderId$.subscribe(orderId => this.orderId = orderId);
    console.log("order id = " + this.orderId);
  }

}
