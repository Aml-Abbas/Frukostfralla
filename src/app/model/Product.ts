export class Product {
  id: string;
  imgUrl: string;
  name: string;
  price: number;

  constructor(id: string, imgUrl: string, name: string, price: number) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.name = name;
    this.price = price;
  }
}
