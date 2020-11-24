import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PasswordService} from '../../../services/password.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  title = 'Lösenord återställning';

  email = '';

  constructor(public location: Location,
              private snackBar: MatSnackBar,
              private passwordService: PasswordService) { }

  ngOnInit(): void {
  }

  sendResetRequest() {
    this.snackBar.open('Tack för din begäran', 'Stäng', {
      duration: 3000
    });
    this.passwordService.requestNewPassword();
    this.location.back();
  }

}
