import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient) { }

  getUsersCurrentPassword(userid: string): string {
    return '';
  }

  saveNewPassword(password: string): void {

  }

  requestNewPassword(): void {

  }
}
