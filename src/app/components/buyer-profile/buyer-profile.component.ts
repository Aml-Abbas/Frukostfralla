import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Buyer} from '../../model/Buyer';
import {BuyerInfoService} from '../../../services/buyer-info.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.scss']
})
export class BuyerProfileComponent implements OnInit {
  title = 'Min profil';
  router: Router;
  buyer: Buyer;
  location: Location;

  constructor(router: Router, private BuyerInfoService: BuyerInfoService) {
    this.router = router;

  }

  ngOnInit(): void {
    this.BuyerInfoService.currentBuyer$.subscribe(buyer =>this.buyer= buyer);

  }

  public navigateToProfileEditor(): void {
    this.router.navigate(['/buyer-profile-editor']);
  }

  public navigateBack(): void {
    this.location.back();
  }

}
