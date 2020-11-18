import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {MatListOption} from '@angular/material/list';

@Component({
  selector: 'app-seller-days-selection',
  templateUrl: './seller-days-selection.component.html',
  styleUrls: ['./seller-days-selection.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class SellerDaysSelectionComponent implements OnInit {

  title = 'Välj veckodagar';
  location: Location;
  router: Router;

  weekDays: string[] = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag']
  selectedWeekDays: string[];

  public dateValues: Date[] = [];
  public multiSelect: Boolean = true;

  constructor(location: Location, router: Router) {
    this.location = location;
    this.router = router;

    this.selectedWeekDays = [];
  }

  ngOnInit(): void {
    /**
     *  TODO: Make a get call to the API to get the user's week days and save them in the array weekDays
     *  this.weekDays = days from the backend
     */
  }

  public navigateBack(): void {
    this.location.back();
  }

  onGroupsChange(selectedDays: string[]): void {
    console.log(selectedDays);
    this.selectedWeekDays = selectedDays;
  }

  onSave(): void {
    // TODO: Make a post call to the API to save the data
    this.router.navigate(['/seller-profile'], {replaceUrl: true});

  }

  onCancel(): void {
    this.router.navigate(['/seller-profile'], {replaceUrl: true});
  }

}
