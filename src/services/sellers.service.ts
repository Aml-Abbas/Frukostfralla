import { Injectable } from '@angular/core';
import {Seller} from '../app/model/Seller';

@Injectable({
  providedIn: 'root'
})
export class SellersService {

  constructor() { }

  getSellers(city: string): Seller[] {
    return [];
  }

}
