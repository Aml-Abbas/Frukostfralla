import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Bakery} from '../../model/Bakery';

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

  getSellerBakery(userid: string): Bakery {
    return new Bakery('Odens Bageri',  'Bruksgatan', '7A', 'Höganäs', 'Skåne');
  }

  // This should be called when a seller logs in
  setSellerId(id: string) {
    this.sellerId.next(id);
  }

  getDates(): Date[] {
    return [];
  }

  saveDates(dates: Date[]) {

  }

  getNameById(userid: string): string {
    return 'Marcus'
  }

  getEmailById(userid: string): string {
    return 'marcus@domain.se'
  }

  getMobileById(userid: string): string {
    return '0720002384'
  }

  getProfilePhoto(userid: string): string {
    return '../../../assets/img/profile-photo-placeholder.png';
  }

  getHashedPassword(userid: string): string {
    return '1234'
  }


  saveName(name: string) {

  }

  saveMobile(mobile: string) {

  }

  saveEmail(email: string) {

  }


}
