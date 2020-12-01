import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Buyer} from '../../../model/Buyer';
import {BuyerInfoService} from '../../services/buyer-info.service';

@Component({
  selector: 'app-buyer-profil-editor',
  templateUrl: './buyer-profil-editor.component.html',
  styleUrls: ['./buyer-profil-editor.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class BuyerProfilEditorComponent implements OnInit {

  title = 'Redigera profil';
  location: Location;
  hide = true;
  router: Router;
  buyer: Buyer;
  enteredEmail:string;
  enteredName:string;
  enteredMobile:string;
  enteredCity:string;
  enteredStreet:string;

  constructor(location: Location, router: Router,   private aRoute: ActivatedRoute, private BuyerInfoService: BuyerInfoService) {
    this.location = location;
    this.router = router;
  }

  ngOnInit(): void {
    this.BuyerInfoService.currentBuyer$.subscribe(buyer =>this.buyer= buyer);

  }

  public navigateBack(): void {
    this.location.back();
  }

  changeBuyerInfo(){
    this.router.navigate(
      ['../buyer-profile'],
      {replaceUrl: true, relativeTo: this.aRoute});

  }
}
