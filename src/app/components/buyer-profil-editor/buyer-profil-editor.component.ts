import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-buyer-profil-editor',
  templateUrl: './buyer-profil-editor.component.html',
  styleUrls: ['./buyer-profil-editor.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerProfilEditorComponent implements OnInit {

  title = 'Redigera profil';
  location: Location;
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
