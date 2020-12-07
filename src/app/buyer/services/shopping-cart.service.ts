import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Item} from '../../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems = new Map<Item, number>();
  private total = new BehaviorSubject<number>(0);

  currentTotal = this.total.asObservable();

  constructor() { }

  addItem(item: Item) {
    this.cartItems.set(item, 1);
  }


}
