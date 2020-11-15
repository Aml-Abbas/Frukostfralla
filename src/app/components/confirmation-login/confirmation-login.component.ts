import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirmation-login',
  templateUrl: './confirmation-login.component.html',
  styleUrls: ['./confirmation-login.component.scss']
})
export class ConfirmationLoginComponent implements OnInit {

  router: Router;

  title = 'Bekräftelse';
  email = '';
  enteredPassword = '';
  hide = true;

  constructor(router: Router) {
    this.router = router;

  }

  ngOnInit(): void {
  }

}
