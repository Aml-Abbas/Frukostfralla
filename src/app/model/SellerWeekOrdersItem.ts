import {SellerOrderDetailsProduct} from './SellerOrderDetailsProduct';

export class SellerWeekOrdersItem {
  buyer: string;
  orderId: string;
  total: number;
  firstProduct: string;

  constructor(buyer: string, orderId: string, total: number, firstProduct: string) {
    this.buyer = buyer;
    this.orderId = orderId;
    this.total = total;
    this.firstProduct = firstProduct;
  }
}
