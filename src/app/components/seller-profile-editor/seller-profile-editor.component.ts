import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-seller-profile-editor',
  templateUrl: './seller-profile-editor.component.html',
  styleUrls: ['./seller-profile-editor.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class SellerProfileEditorComponent implements OnInit {
  title = 'Redigera profil'

  location: Location
  enteredPassword = '';
  hide = true;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {
  }

  public navigateBack(): void {
    this.location.back();
  }


}
