import {Bakery} from './Bakery';

export class Seller{
  name:string;
  email:string;
  mobile:string;

  bakery:Bakery;

  location:string;

  password:string;


  constructor(name: string, email: string, mobile: string, bakery: Bakery, location: string, password: string) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.bakery = bakery;
    this.location = location;
    this.password = password;
  }
}
