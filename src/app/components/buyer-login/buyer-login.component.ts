import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-buyer-login',
  templateUrl: './buyer-login.component.html',
  styleUrls: ['./buyer-login.component.scss']
})
export class BuyerLoginComponent implements OnInit {

  router: Router;

  title = 'Välkommen';
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
      this.router.navigate(['/seller-my-products']);
    }
  }

  public checkCred(): boolean {
    return true;
  }

}
