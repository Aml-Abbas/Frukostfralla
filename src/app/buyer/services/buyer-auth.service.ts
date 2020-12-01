import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

interface Response {
  authorization: string,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class BuyerAuthService {

  private loginUrl = "http://localhost:8080/login";

  signedIn = false;

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string) {
    console.log('email: ' + email);
    console.log('password: ' + password);

    // this.signedIn = true;
    const headers = new HttpHeaders({'authorization': 'Bearer xxx.yyy.zzz', 'Content-Type': 'text/html'});
    return this.http.post<Response>(this.loginUrl, {email, password});
  }

  signOut() {
    this.signedIn = false;
  }

  isSignedIn() {
    return this.signedIn;
  }
}
