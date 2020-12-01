import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {MatListOption} from '@angular/material/list';
import {SellerProfileService} from '../../services/seller-profile.service';

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

  public dateValues: Date[] = [new Date('2020-11-23')];
  public multiSelect: Boolean = true;

  constructor(location: Location, router: Router, private profileService: SellerProfileService) {
    this.location = location;
    this.router = router;

    this.selectedWeekDays = [];
  }

  ngOnInit(): void {
    this.dateValues = this.profileService.getDates();
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
    this.profileService.saveDates(this.dateValues);
    this.location.back();

  }

  onCancel(): void {
    this.location.back();
  }

}
