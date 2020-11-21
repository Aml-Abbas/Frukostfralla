import {Injectable} from '@angular/core';
import {Product} from '../app/model/Product';
import {BehaviorSubject, Subject} from 'rxjs';

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

  getProductsBySeller(sellerId: string): Product[] {
    return [
      new Product('', 'assets/img/product-placeholder.png', 'Baguette', 10),
      new Product('', 'assets/img/product-placeholder.png', 'Baguette', 10),
      new Product('', 'assets/img/product-placeholder.png', 'Baguette', 10),
      new Product('', 'assets/img/product-placeholder.png', 'Baguette', 10),
      new Product('', 'assets/img/product-placeholder.png', 'Baguette', 10),
      new Product('', 'assets/img/product-placeholder.png', 'Baguette', 10),
      new Product('', 'assets/img/product-placeholder.png', 'Baguette', 10),
      new Product('', 'assets/img/product-placeholder.png', 'Baguette', 10),
      new Product('', 'assets/img/product-placeholder.png', 'Baguette', 10),
      new Product('', 'assets/img/product-placeholder.png', 'Baguette', 10)
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
