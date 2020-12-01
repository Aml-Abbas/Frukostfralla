import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerProfileService {

  private buyerId = new BehaviorSubject('-1');

  currentBuyerId$ = this.buyerId.asObservable();


  constructor() { }

  setSellerId(id: string) {
    this.buyerId.next(id);
  }

}
