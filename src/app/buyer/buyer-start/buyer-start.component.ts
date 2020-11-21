import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BuyerStartService} from '../../../services/buyer-start.service';

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
  city: string;

  constructor(router: Router, private buyerStartService: BuyerStartService) {
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

  findCity() {
    this.buyerStartService.setCity(this.city);
    this.router.navigate(['/sellers']).then(result => {
      console.log(result.valueOf());
    })
  }
}
