export class Bakery {
  name: string;
  street: string;
  house: string;
  city: string;
  county: string;


  constructor(name: string, street: string, house: string, city: string,
              county: string) {
    this.name = name;
    this.street = street;
    this.house = house;
    this.city = city;
    this.county = county;
  }
}
