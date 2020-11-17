import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Bakery} from '../app/model/Bakery';

@Injectable({
  providedIn: 'root'
})
export class SellerProfileService {

  // Sources
  private sellerId = new BehaviorSubject('-1');

  // Observables
  currentSellerId$ = this.sellerId.asObservable();

  constructor() {
  }

  getSellerBakery(): Bakery {
    return new Bakery('Odens Bageri', 'Oden', 'Bruksgatan', '7A', 'Höganäs', 'Skåne');
  }

  // This should be called when a seller logs in
  setSellerId(id: string) {
    this.sellerId.next(id);
  }
}
