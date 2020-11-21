import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ChooseBakeryService} from '../../../services/choose-bakery.service';
import {Bakery} from '../../model/Bakery';
import {SellerProfileService} from '../../../services/seller-profile.service';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.scss']
})

export class SellerProfileComponent implements OnInit {
  title = 'Min profil';
  router: Router;

  chosenBakery: Bakery;

  constructor(router: Router,
              private bakeryService: ChooseBakeryService,
              private sellerProfileService: SellerProfileService) {
    this.router = router;
  }

  ngOnInit(): void {
    this.bakeryService.currentBakery$
      .subscribe(bakery => this.chosenBakery = bakery);
  }

  public navigateToProfileEditor(): void {
    this.router.navigate(['/seller-profile-editor']);
  }

  onChooseBakery() {
    this.bakeryService.setFrom('./seller-profile');
    this.router.navigate(['./choose-bakery']);
  }

}
