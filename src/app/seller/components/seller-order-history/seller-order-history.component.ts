import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-seller-order-history',
  templateUrl: './seller-order-history.component.html',
  styleUrls: ['./seller-order-history.component.scss']
})
export class SellerOrderHistoryComponent implements OnInit {
  title = 'Historik';

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

}
