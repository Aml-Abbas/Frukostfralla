import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';

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

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  public navigateToStart(): void {
    // Navigate back to to seller start page without pushing this page to history
    this.router.navigate(['/seller-start'], {replaceUrl: true});
  }

  public createProfile(): void {

    this.router.navigate(['/seller-profile'], {replaceUrl: true})
  }
}
