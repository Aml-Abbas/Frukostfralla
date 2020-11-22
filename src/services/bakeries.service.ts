import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Bakery} from '../app/model/Bakery';

@Injectable({
  providedIn: 'root'
})

export class BakeriesService {

  // Observable sources

  // The component That navigated to choose bakery
  private fromSource = new BehaviorSubject<string>('');
  private chosenBakerySource = new BehaviorSubject<Bakery>(new Bakery('Bakery 1', 'Bruksgatan', '7A', 'Höganäs', 'Skåne'));

  // Observable streams
  currentFrom$ = this.fromSource.asObservable();
  currentBakery$ = this.chosenBakerySource.asObservable();

  constructor() {
  }

  private bakeries = [
    new Bakery('Bakery 1', 'Bruksgatan', '7A', 'Höganäs', 'Skåne'),
    new Bakery('Bakery 2', 'Storgatan', '1B', 'Höganäs', 'Skåne'),
    new Bakery('Bakery 3', 'Höganäs', '2D', 'Götagatan', 'Skåne'),
    new Bakery('Bakery 4', 'Höganäs', '15F', 'Sveagatan', 'Skåne'),
    new Bakery('Bakery 5', 'Höganäs', '14E', 'Långarödsvägen', 'Skåne'),
    new Bakery('Bakery 5', 'Höganäs', '14E', 'Stockholm', 'Stockholm')
  ];

  setFrom(route: string) {
    this.fromSource.next(route);
  }

  setChosenBakery(bakery: Bakery) {
    this.chosenBakerySource.next(bakery);
    console.log('setChosenBakery: ' + bakery);
  }

  getBakeries(): Bakery[] {
    return [
      new Bakery('Bakery 1', 'Bruksgatan', '7A', 'Höganäs', 'Skåne'),
      new Bakery('Bakery 2', 'Storgatan', '1B', 'Höganäs', 'Skåne'),
      new Bakery('Bakery 3', 'Höganäs', '2D', 'Götagatan', 'Skåne'),
      new Bakery('Bakery 4', 'Höganäs', '15F', 'Sveagatan', 'Skåne'),
      new Bakery('Bakery 5', 'Höganäs', '14E', 'Långarödsvägen', 'Skåne'),
      new Bakery('Bakery 6', 'Höganäs', '14E', 'Stockholm', 'Stockholm')
    ];
  }

  getBakeriesByCounty(county: string): Bakery[] {
    let byCounty = [];
    this.bakeries.filter(e => {
      if (e.county === county) {
        byCounty.push(e);
      }
    });
    return byCounty;
  }

  getBakeriesByCity(city: string): Bakery[] {
    let byCounty = [];
    this.bakeries.filter(e => {
      if (e.city === city) {
        byCounty.push(e);
      }
    });
    return byCounty;
  }

  getBakeriesByName(name: string): Bakery[] {
    let byCounty = [];
    this.bakeries.filter(e => {
      if (e.name.includes(name)) {
        byCounty.push(e);
      }
    });
    return byCounty;
  }


}
