import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {BakerySummaryItem} from '../../../model/BakerySummaryItem';
import {BakeryDetailsItem} from '../../../model/BakeryDetailsItem';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SummaryItem} from '../../../model/SummaryItem';
import {OrderDetailsService} from '../../../../services/order-details.service';

@Component({
  selector: 'app-seller-send-to-bakery',
  templateUrl: './seller-send-to-bakery.component.html',
  styleUrls: ['./seller-send-to-bakery.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})

export class SellerSendToBakeryComponent implements OnInit {
  title = 'Skicka till bageriet';

  location: Location;
  router: Router;

  summary: SummaryItem[];
  details: SummaryItem[];

  expanded = true;


  constructor(location: Location, router: Router,
              private _snackBar: MatSnackBar,
              private orderDetailsService: OrderDetailsService) {
    this.location = location;
    this.router = router;
    this.summary = [];
    this.details = [];
  }

  ngOnInit(): void {
    this.summary = this.orderDetailsService.getWeekSummary();
    this.details = this.orderDetailsService.getWeekDetails();
  }

  public navigateBack(): void {
    this.location.back();
  }


  onSend(): void {
    //  TODO: post call to the API to save the data and mark the order as done
    if (this.sendData()) {
      this._snackBar.open('Skickat!', 'Stäng', {
        duration: 2000
      });
      this.router.navigate(['/seller-my-products'], {replaceUrl: true});
    } else {
      this._snackBar.open('Fel! Försök igen senare.', 'Stäng', {
        duration: 2000
      });
    }
  }

  sendData(): boolean {
    return true;
  }

  orderItems(orderId: string): SummaryItem[] {
    return this.details.filter(e => {
      return e.orderId === orderId
    })
  }

  orderIds(): string[] {
    return ['1', '2'];
  }

}
