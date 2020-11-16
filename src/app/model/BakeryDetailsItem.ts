export class BakeryDetailsItem {
  name: string;
  count: number;
  orderId: string;


  constructor(name: string, count: number, orderId: string) {
    this.name = name;
    this.count = count;
    this.orderId = orderId;
  }
}
