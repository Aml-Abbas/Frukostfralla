import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  title = 'Uppdatera ditt lösenord';

  currentPassword = '';
  enteredPassword = '';
  enteredPassword2 = '';

  hideCurrent = true;

  hide = true;

  constructor(private location: Location) {
  }

  ngOnInit(): void {
  }

  navigateBack() {
    this.location.back();
  }
}
