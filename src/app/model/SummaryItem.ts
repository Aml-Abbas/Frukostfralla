export class SummaryItem {
  orderId: string;
  name: string;
  count: number;
  imageSrc: string;

  constructor(orderId: string, name: string, count: number, imageSrc: string) {
    this.orderId = orderId;
    this.name = name;
    this.count = count;
    this.imageSrc = imageSrc;
  }
}
