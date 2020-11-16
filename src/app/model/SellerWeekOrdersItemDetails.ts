import {SellerOrderDetailsProduct} from './SellerOrderDetailsProduct';

export class SellerWeekOrdersItemDetails {
  buyer: string;
  address: string;
  mobileNumber: string;
  orderId: string;
  total: number;
  products: SellerOrderDetailsProduct[];


  constructor(buyer: string, address: string, mobileNumber: string,
              orderId: string, total: number, products: SellerOrderDetailsProduct[]) {
    this.buyer = buyer;
    this.address = address;
    this.mobileNumber = mobileNumber;
    this.orderId = orderId;
    this.total = total;
    this.products = products;
  }
}
