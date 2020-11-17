import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {ChooseBakeryService} from '../../../services/choose-bakery.service';
import {Bakery} from '../../model/Bakery';


@Component({
  selector: 'app-seller-choose-bakery',
  templateUrl: './seller-choose-bakery.component.html',
  styleUrls: ['./seller-choose-bakery.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class SellerChooseBakeryComponent implements OnInit {

  title = 'Välj bageri';
  location: Location;
  router: Router;

  // The page that navigated here
  fromRoute = '';

  bakeries: Bakery[];

  constructor(location: Location, router: Router, private bakeryService: ChooseBakeryService) {
    this.location = location;
    this.router = router;
  }

  ngOnInit(): void {
    this.bakeryService.currentFrom$.subscribe(from => this.fromRoute = from);
    this.bakeries = this.bakeryService.getBakeries();
  }

  public navigateBack(): void {
    this.location.back();
  }

  onListItemClick(bakery: Bakery): void {
    this.bakeryService.setChosenBakery(bakery);
    this.location.back();
  }

}
