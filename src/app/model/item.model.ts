export class Item {
    itemId: number;
    imageUrl: string;
    sellerId: number;
    price: number;
    itemName: string;
    count: number;

  constructor(itemId: number, imageUrl: string, sellerId: number, price: number, itemName: string) {
    this.itemId = itemId;
    this.imageUrl = imageUrl;
    this.sellerId = sellerId;
    this.price = price;
    this.itemName = itemName;
    this.count = 1;
  }
}
