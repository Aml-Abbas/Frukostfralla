import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirmation-no-login',
  templateUrl: './confirmation-no-login.component.html',
  styleUrls: ['./confirmation-no-login.component.scss']
})
export class ConfirmationNoLoginComponent implements OnInit {

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
