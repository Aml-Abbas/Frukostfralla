import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  // Observable string source
  private orderIdSource = new BehaviorSubject<string>("-1")

  // Observable string stream
  currentOrderId$ = this.orderIdSource.asObservable();

  constructor() { }

  setOrderId(orderId: string) {
    this.orderIdSource.next(orderId);
  }


}
