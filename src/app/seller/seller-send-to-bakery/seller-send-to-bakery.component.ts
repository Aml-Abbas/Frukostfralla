import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {BakerySummaryItem} from '../../model/BakerySummaryItem';
import {BakeryDetailsItem} from '../../model/BakeryDetailsItem';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  bakerySummaryItems: BakerySummaryItem[];
  bakeryDetailsItemsMap: Map<string, BakerySummaryItem[]>;


  constructor(location: Location, router: Router, private _snackBar: MatSnackBar) {
    this.location = location;
    this.router = router;
    this.bakerySummaryItems = [];
    this.bakeryDetailsItemsMap = new Map();
    this.getSummary();
    this.getDetailed();
  }

  ngOnInit(): void {
  }

  public navigateBack(): void {
    this.location.back();
  }

  getSummary(): void {
    for (let i = 0; i < 3; i++) {
      this.bakerySummaryItems.push(
        new BakerySummaryItem('fralla ' + (i + 1), 5)
      );
    }
  }

  getDetailed(): void {
    this.bakeryDetailsItemsMap.set(
      'cllr4bI1UP',
      [
        new BakerySummaryItem('Frallal 1', 3),
        new BakerySummaryItem('Frallal 2', 2),
        new BakerySummaryItem('Frallal 3', 3)
      ]
    );

    this.bakeryDetailsItemsMap.set(
      'LKWODOFgzq',
      [
        new BakerySummaryItem('Frallal 1', 3),
        new BakerySummaryItem('Frallal 2', 2),
        new BakerySummaryItem('Frallal 3', 3)
      ]
    );
  }

  onSend(): void {
  //  TODO: post call to the API to save the data and mark the order as done
    if (this.sendData()) {
      this._snackBar.open("Skickat!", "Stäng", {
        duration: 2000
      });
      this.router.navigate(['/seller-my-products'], {replaceUrl: true});
    } else {
      this._snackBar.open("Fel! Försök igen senare.", "Stäng", {
        duration: 2000
      });
    }
  }

  sendData(): boolean {
    return true;
  }


}
