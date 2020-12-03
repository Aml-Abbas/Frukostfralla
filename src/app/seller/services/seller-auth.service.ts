import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthService {

  signedIn = false;

  constructor() { }

  signIn(email: string, password: string) {
    console.log('email: ' + email);
    console.log('password: ' + password);
    this.signedIn = true;
  }
  signUp() {
    this.signedIn = true;
  }

  signOut() {
    this.signedIn = false;
  }

  isSignedIn() {
    return this.signedIn;
  }

}
