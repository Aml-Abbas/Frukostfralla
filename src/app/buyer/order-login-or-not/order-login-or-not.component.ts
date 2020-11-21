import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-login-or-not',
  templateUrl: './order-login-or-not.component.html',
  styleUrls: ['./order-login-or-not.component.scss']
})
export class OrderLoginOrNotComponent implements OnInit {


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

  public login(): void {
    // log in if credentials are correct
    if (this.checkCred()) {
      this.router.navigate(['/confirmation-login']);
    }
  }

  public checkCred(): boolean {
    return true;
  }

}
