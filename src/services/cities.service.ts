import {Injectable} from '@angular/core';
import cities from '../../src/se.json';

interface City {
  city: string
  lat: number
  country: string
  iso2: string
  admin_name: string
  capital: string
  population: string
  population_proper: string
}

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities: City[] = cities;

  constructor() {
  }

  getCitiesByCounty(county: string): string[] {
    let citiesByCounty = [];
    this.cities.filter(value => {
      if (value.admin_name.toLowerCase() === county.toLowerCase()) {
        citiesByCounty.push(value.city);
      }
    });
    return citiesByCounty;
  }

  getCounties(): string[] {
    let counties = [];
    this.cities.filter(value => {
      counties.push(value.admin_name);
    });
    return counties;
  }
}
