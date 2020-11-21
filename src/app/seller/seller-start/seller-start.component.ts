import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seller-start',
  templateUrl: './seller-start.component.html',
  styleUrls: ['./seller-start.component.scss']
})
export class SellerStartComponent implements OnInit {
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
