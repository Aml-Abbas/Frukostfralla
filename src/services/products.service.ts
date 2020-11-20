import { Injectable } from '@angular/core';
import {Product} from '../app/model/Product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private sellerId = new BehaviorSubject<string>('');

  currentSellerId$ = this.sellerId.asObservable();

  constructor() { }

  getProductsBySeller(sellerId: string): Product[] {
    return [
      new Product("", "Baguette", 10),
      new Product("", "Baguette", 10),
      new Product("", "Baguette", 10),
      new Product("", "Baguette", 10),
      new Product("", "Baguette", 10),
      new Product("", "Baguette", 10),
      new Product("", "Baguette", 10),
      new Product("", "Baguette", 10),
      new Product("", "Baguette", 10),
      new Product("", "Baguette", 10)
    ];
  }

  setSellerId(sellerId: string) {
    this.sellerId.next(sellerId);
  }

  getSellerName(sellerId: string): string {
    return 'Max';
  }
}
