import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
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
  hide = true;

  email = '';
  name = '';
  mobile = '';
  enteredPassword = '';
  enteredPassword2 = '';

  chosenBakery: Bakery;

  constructor(router: Router,
              private bakeryService: ChooseBakeryService,
              private _snackBar: MatSnackBar) {
    this.router = router;
  }

  ngOnInit(): void {
    this.bakeryService.currentBakery$.subscribe(
      bakery => this.chosenBakery = bakery
    );
  }

  public navigateToStart(): void {
    // Navigate back to to seller start page without pushing this page to history
    this.router.navigate(['/seller-start'], {replaceUrl: true});
  }

  onCreate(): void {
    if (this.enteredPassword != this.enteredPassword2
      || this.email == '' || this.name == '' || this.mobile == ''
      || this.chosenBakery == null) {
      this._snackBar.open('Rätta felen.', 'Ok', {
        duration: 2000
      });
    } else {
      this.router.navigate(['/seller-profile'], {replaceUrl: true});
    }
  }

  onChooseBakery(): void {
    this.bakeryService.setFrom('./seller-create-profile');
    this.router.navigate(['/choose-bakery']);
  }
}
