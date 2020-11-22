import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {ChooseBakeryService} from '../../../services/choose-bakery.service';
import {Bakery} from '../../model/Bakery';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {CitiesService} from '../../../services/cities.service';
import {MatAccordion} from '@angular/material/expansion';

export interface DialogData {
  city: string;
  county: string;
}

@Component({
  selector: 'app-seller-choose-bakery',
  templateUrl: './seller-choose-bakery.component.html',
  styleUrls: ['./seller-choose-bakery.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})

export class SellerChooseBakeryComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  title = 'Välj bageri';
  location: Location;
  router: Router;

  // The page that navigated here
  fromRoute = '';

  bakeries: Bakery[];

  city: string;
  county: string;

  panelOpenState;

  cities: string[] = [];
  counties: string[];

  constructor(location: Location, router: Router,
              private bakeryService: ChooseBakeryService,
              private citiesService: CitiesService) {
    this.location = location;
    this.router = router;
  }

  ngOnInit(): void {
    this.bakeryService.currentFrom$.subscribe(from => this.fromRoute = from);
    this.bakeries = this.bakeryService.getBakeries();
    console.log(this.cities.length)
    this.counties = this.citiesService.getCounties();
  }

  public navigateBack(): void {
    this.location.back();
  }

  onListItemClick(bakery: Bakery): void {
    this.bakeryService.setChosenBakery(bakery);
    this.location.back();
  }

  getBakeriesByCounty(county: string) {
    console.log(county);
    this.cities = this.citiesService.getCitiesByCounty(county);
    this.bakeries = this.bakeryService.getBakeriesByCounty(county);
  }

  getBakeriesByCity(city: string) {
    console.log(city);
    this.bakeries = this.bakeryService.getBakeriesByCity(city);
  }

  findBakeryByName(name: string) {
    console.log(name);
    this.bakeries = this.bakeryService.getBakeriesByName(name);
  }


}

