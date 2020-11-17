import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Bakery} from '../app/model/Bakery';

@Injectable({
  providedIn: 'root'
})

export class ChooseBakeryService {

  // Observable sources

  // The component That navigated to choose bakery
  private fromSource = new BehaviorSubject<string>("");
  private chosenBakerySource = new BehaviorSubject<Bakery>(new Bakery('Bakery 1', 'Oden','Bruksgatan','7A','Höganäs',   'Skåne'));

  // Observable streams
  currentFrom$ = this.fromSource.asObservable();
  currentBakery$ = this.chosenBakerySource.asObservable();

  constructor() { }


  setFrom(route: string) {
    this.fromSource.next(route);
  }

  setChosenBakery(bakery: Bakery) {
    this.chosenBakerySource.next(bakery);
    console.log("setChosenBakery: " + bakery);6
  }

  getBakeries(): Bakery[] {
    return [
      new Bakery('Bakery 1', 'Oden','Bruksgatan','7A','Höganäs',   'Skåne'),
      new Bakery('Bakery 2',  'Baneret', 'Storgatan', '1B', 'Höganäs','Skåne'),
      new Bakery('Bakery 3', 'Diana','Höganäs',  '2D','Götagatan', 'Skåne'),
      new Bakery('Bakery 4', 'Orion','Höganäs', '15F','Sveagatan',  'Skåne'),
      new Bakery('Bakery 5', 'Kolonien','Höganäs',  '14E','Långarödsvägen', 'Skåne')
    ];
  }

}
