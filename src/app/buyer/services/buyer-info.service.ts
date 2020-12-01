import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Buyer} from '../../model/Buyer';

@Injectable({
  providedIn: 'root'
})
export class BuyerInfoService {

  private buyerId= new BehaviorSubject<string>('');
  currentId$= this.buyerId.asObservable();

  private buyer= new BehaviorSubject<Buyer>(
    new Buyer('Niklas',
      'niklas.Andersson@hotmail.com',
    'furutorpsgatan 18A Lgh1101',
      '25225 Helsingborg',
      '0723778116', 'niklasandersson'));

  currentBuyer$= this.buyer.asObservable();

  constructor() { }


}
