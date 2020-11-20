export class Product {
  imgUrl: string;
  name: string;
  price: number;

  constructor(imgUrl: string, name: string, price: number) {
    this.imgUrl = imgUrl;
    this.name = name;
    this.price = price;
  }
}
