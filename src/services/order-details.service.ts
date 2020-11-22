import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {SellerOrderDetailsProduct} from '../app/model/SellerOrderDetailsProduct';
import {SellerWeekOrdersItemDetails} from '../app/model/SellerWeekOrdersItemDetails';
import {SummaryItem} from '../app/model/SummaryItem';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  // Observable sources
  private orderIdSource = new BehaviorSubject<string>('-1');

  // Observable streams
  currentOrderId$ = this.orderIdSource.asObservable();

  constructor() {
  }

  setOrderId(orderId: string) {
    this.orderIdSource.next(orderId);
  }

  fetchProducts(): SellerOrderDetailsProduct[] {
    console.log('order id in fetchProducts() = ' + this.currentOrderId$);
    let products: SellerOrderDetailsProduct[] = [];
    for (let i = 0; i < 3; i++) {
      products.push(
        new SellerOrderDetailsProduct(
          '10',
          'Fralla' + (i + 1),
          3,
          10
        )
      );
    }
    return products;
  }

  fetchOrdersItemDetails(): SellerWeekOrdersItemDetails {
    let products: SellerOrderDetailsProduct[] = [];
    for (let i = 0; i < 3; i++) {
      products.push(new SellerOrderDetailsProduct(
        '10',
        'Fralla' + (i + 1),
        3,
        10
        )
      );
    }

    return new SellerWeekOrdersItemDetails(
      'Alexandiar',
      'Koppargården 15D Lgh 503\n' +
      '25135 Sundsvall',
      '0760539334',
      90,
      products
    );

  }

  getWeekSummary(): SummaryItem[] {
    return [
      new SummaryItem('1', 'Baugette', 3, ''),
      new SummaryItem('1', 'Donut', 4, ''),
      new SummaryItem('2', 'Baugette', 2, '')
    ];
  }

  getWeekDetails(): SummaryItem[] {
    return [
      new SummaryItem('1', 'Baugette', 2, ''),
      new SummaryItem('2', 'Baugette', 1, ''),
      new SummaryItem('1', 'Donut', 2, ''),
      new SummaryItem('2', 'Donut', 2, ''),
      new SummaryItem('1', 'Baugette', 2, '')
    ];
  }


}
