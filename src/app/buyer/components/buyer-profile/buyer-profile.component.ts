import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Buyer} from '../../../model/Buyer';
import {BuyerInfoService} from '../../services/buyer-info.service';
import {BuyerAuthService} from '../../services/buyer-auth.service';


@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.scss'],

})
export class BuyerProfileComponent implements OnInit {
  title = 'Min profil';
  router: Router;
  buyer: Buyer;

  constructor(router: Router,
              private aRoute: ActivatedRoute,
              private BuyerInfoService: BuyerInfoService,
              private authService: BuyerAuthService) {
    this.router = router;
  }

  ngOnInit(): void {
    this.BuyerInfoService.currentBuyer$.subscribe(buyer =>this.buyer= buyer);

  }

  public navigateToProfileEditor(): void {
    this.router.navigate(
      ['../buyer-profile-editor'],
      {replaceUrl: true, relativeTo: this.aRoute});
  }

  signOut() {
    this.authService.signOut();
    this.router.navigate(['/landing'])
  }

}
