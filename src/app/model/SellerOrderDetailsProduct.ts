export class SellerOrderDetailsProduct {
  orderId: string;
  name: string;
  amount: number;
  price: number;
  total: number;

  constructor(name: string, amount: number, price: number) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.total = amount * price;
  }

}
