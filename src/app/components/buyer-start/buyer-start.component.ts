import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buyer-start',
  templateUrl: './buyer-start.component.html',
  styleUrls: ['./buyer-start.component.scss']
})
export class BuyerStartComponent implements OnInit {
router: Router;

  title = 'Välkommen - Välj stad';
  email = '';
  enteredPassword = '';
  hide = true;
  city = '';

  constructor(router: Router) {
    this.router = router;

  }

  ngOnInit(): void {
  }

  public login(): void {
    // log in if credentials are correct
    if (this.checkCred()) {
      this.router.navigate(['/buyer-profile']);
    }
  }

  public checkCred(): boolean {
    return true;
  }

  public findCity(): boolean {
    return false;
  }
}
