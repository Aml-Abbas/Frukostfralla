import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  imageSrc = '../../../assets/img/profile-photo-placeholder.png';

  file = null;

  constructor(router: Router,
              private aRoute: ActivatedRoute,
              private bakeryService: ChooseBakeryService,
              private sellerProfileService: SellerProfileService) {
    this.router = router;
  }

  ngOnInit(): void {
    this.bakeryService.currentBakery$
      .subscribe(bakery => this.chosenBakery = bakery);
  }

  public navigateToProfileEditor(): void {
    this.router.navigate(['../seller-profile-editor'], {relativeTo: this.aRoute});
  }

  onChooseBakery() {
    this.bakeryService.setFrom('./seller-profile');
    this.router.navigate(['../choose-bakery'], {relativeTo: this.aRoute});
  }

  chooseImage(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      [this.file] = event.target.files;
      reader.readAsDataURL(this.file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        console.log(this.imageSrc);
        console.log(this.file.valueOf());
      }
    }

  }

  logout() {
    this.router.navigate(['../seller-start'], {relativeTo: this.aRoute, replaceUrl: true})
  }
}
