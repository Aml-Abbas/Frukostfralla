import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SellerAuthService} from '../../services/seller-auth.service';

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

  constructor(router: Router,
              private aRoute: ActivatedRoute,
              private authService: SellerAuthService) {
    this.router = router;

  }

  ngOnInit(): void {
  }

  public signIn(): void {
    this.authService.signIn(this.email, this.enteredPassword);
    this.router.navigate(['../seller-my-products'], {relativeTo: this.aRoute});

  }

  public checkCred(): boolean {
    return true;
  }

}
