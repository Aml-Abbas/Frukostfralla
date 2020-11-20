export class Buyer{
  name:string;
  email:string;

  street: string;
  city: string;

  mobile:string;
  password:string


  constructor(name: string, email: string, street: string, city: string, mobile: string, password: string) {
    this.name = name;
    this.email = email;
    this.street = street;
    this.city = city;
    this.mobile = mobile;
    this.password = password;
  }
}
