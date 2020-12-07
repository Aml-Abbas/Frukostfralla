import {Injectable} from '@angular/core';
import {Product} from '../app/model/Product';
import {BehaviorSubject, Subject} from 'rxjs';
import {Item} from '../app/model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private sellerId = new BehaviorSubject<string>('');
  private products = new BehaviorSubject<Product[]>([]);
  private image = new Subject<File>();

  currentSellerId$ = this.sellerId.asObservable();

  constructor() {
  }

  getProductsBySeller(sellerId: string): Item[] {
    return [
      new Item(1, 'assets/img/fralla1.jpg', 2, 10, 'Bulle 1'),
      new Item(2, 'assets/img/fralla1.jpg', 2, 10, 'Bulle 2'),
      new Item(3, 'assets/img/fralla1.jpg', 2, 10, 'Bulle 3'),
      new Item(4, 'assets/img/fralla1.jpg', 2, 10, 'Bulle 4'),
      new Item(5, 'assets/img/fralla1.jpg', 2, 10, 'Bulle 5'),
      new Item(6, 'assets/img/fralla1.jpg', 2, 10, 'Bulle 6'),
      new Item(7, 'assets/img/fralla1.jpg', 2, 10, 'Bulle 7'),

    ];
  }

  setSellerId(sellerId: string) {
    this.sellerId.next(sellerId);
  }

  setImage(image: File) {
    this.image.next(image);
  }

  getSellerName(sellerId: string): string {
    return 'Max';
  }

  saveProduct(sellerId: string, name: string, price: number, imageFile: any): boolean {
    //  TODO: Call the API to save the product
    return true;
  }

}
