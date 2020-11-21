import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Buyer} from '../app/model/Buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerInfoService {

  private buyerId= new BehaviorSubject<string>('');
  currentId$= this.buyerId.asObservable();

  private buyer= new BehaviorSubject<Buyer>(
    new Buyer('Aml',
      'aml.abbas@hotmail.com',
    'Rökullagatan 18A Lgh1101',
      '25458 Helsingborg',
      '0723758116', 'amlabbas'));

  currentBuyer$= this.buyer.asObservable();

  constructor() { }


}
