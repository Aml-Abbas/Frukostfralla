import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {BakeriesService} from '../../../../services/bakeries.service';
import {Bakery} from '../../../model/Bakery';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SellerSignupService} from '../../services/seller-signup.service';


@Component({
  selector: 'app-seller-create-profile',
  templateUrl: './seller-create-profile.component.html',
  styleUrls: ['./seller-create-profile.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})

export class SellerCreateProfileComponent implements OnInit {
  title = 'Skapa profil';
  hide = true;

  email = '';
  name = '';
  mobile = '';
  enteredPassword = '';
  enteredPassword2 = '';

  chosenBakery: Bakery;

  constructor(private router: Router,
              private location: Location,
              private bakeryService: BakeriesService,
              private snackBar: MatSnackBar,
              private aRoute: ActivatedRoute,
              private signupService: SellerSignupService) {
  }

  ngOnInit(): void {
    this.bakeryService.currentBakery$.subscribe(
      bakery => this.chosenBakery = bakery
    );
  }

  public navigateBack(): void {
    // Navigate back to to seller start page without pushing this page to history
    this.location.back();
  }

  onCreate(): void {
    if (this.enteredPassword != this.enteredPassword2
      || this.email == '' || this.name == '' || this.mobile == ''
      || this.chosenBakery == null) {
      this.snackBar.open('Rätta felen.', 'Ok', {
        duration: 2000
      });
      this.router.navigate(
        ['../seller-profile'],
        {replaceUrl: true, relativeTo: this.aRoute});
    } else {
      this.router.navigate(
        ['../seller-profile'],
        {replaceUrl: true, relativeTo: this.aRoute});
    }
  }

  onChooseBakery(): void {
    this.bakeryService.setFrom('./seller-create-profile');
    this.router.navigate(['/choose-bakery']);
  }
}
