import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';


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

  constructor(location: Location, router: Router) {
    this.location = location;
    this.router = router;
  }

  ngOnInit(): void {
  }

  public navigateBack(): void {
    this.location.back();
  }

  public toSellerCreateProfile(): void {
    this.router.navigate(['/seller-create-profile'], {replaceUrl: true})
  }

}
