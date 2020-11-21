import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {ChooseBakeryService} from '../../../services/choose-bakery.service';
import {Bakery} from '../../model/Bakery';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-seller-create-profile',
  templateUrl: './seller-create-profile.component.html',
  styleUrls: ['./seller-create-profile.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})

export class SellerCreateProfileComponent implements OnInit {
  title = 'Skapa profil';
  router: Router;
  location: Location;
  hide = true;

  email = '';
  name = '';
  mobile = '';
  enteredPassword = '';
  enteredPassword2 = '';

  chosenBakery: Bakery;

  constructor(router: Router, location: Location,
              private bakeryService: ChooseBakeryService,
              private _snackBar: MatSnackBar,
              private aRoute: ActivatedRoute) {
    this.router = router;
    this.location = location;
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
      this._snackBar.open('Rätta felen.', 'Ok', {
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
