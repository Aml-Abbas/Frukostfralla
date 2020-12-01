import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Bakery} from '../../model/Bakery';

@Injectable({
  providedIn: 'root'
})
export class SellerSignupService {

  // The component That navigated to choose bakery
  private email = new BehaviorSubject<string>("");
  private name = new BehaviorSubject<string>("");
  private mobile = new BehaviorSubject<string>("");

  private chosenBakerySource = new Subject<Bakery>();

  private county = new BehaviorSubject<string>("");
  private city = new BehaviorSubject<string>("");
  private area = new BehaviorSubject<string>("");

  private password = new BehaviorSubject<string>("");

  // Observable streams
  currentFrom$ = this.email.asObservable();
  currentName$ = this.name.asObservable();
  currentMobile$ = this.mobile.asObservable();

  currentBakery$ = this.chosenBakerySource.asObservable();

  currentCounty$ = this.county.asObservable();
  currentCity$ = this.city.asObservable();
  currentArea$ = this.area.asObservable();

  currentPassword$ = this.password.asObservable();

  constructor() { }

  setEmail(email: string) {
    this.email.next(email);
  }

  setName(name: string) {
    this.name.next(name);
  }

  setMobile(mobile: string) {
    this.mobile.next(mobile);
  }

  setChosenBakery(bakery: Bakery) {
    this.chosenBakerySource.next(bakery);
  }

  setCounty(county: string) {
    this.county.next(county);
  }

  setCity(city: string) {
    this.city.next(city);
  }

  setArea(area: string) {
    this.area.next(area);
  }

  setPassword(password: string) {
    this.password.next(password);
  }


}
