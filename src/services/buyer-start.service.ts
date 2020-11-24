import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerStartService {

  private city = new BehaviorSubject<string>('');
  currentCity$ = this.city.asObservable();

  constructor() {
  }

  setCity(city: string) {
    this.city.next(city);
  }

  getCity(): string {
    return 'Helsingborg';
  }

}
