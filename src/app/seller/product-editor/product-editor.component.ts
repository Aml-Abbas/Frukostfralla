import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class ProductEditorComponent implements OnInit {
  title = 'Lägg en ny fralla';
  router: Router;
  location: Location;

  constructor(router: Router, location: Location) {
    this.router = router;
    this.location = location;
  }

  ngOnInit(): void {
  }

  public chooseImage(): void {

  }

  public saveProduct(): void {
    // 1. Do the saving stuff
    // 2. If the saving is successful navigate to products page

    // replaceUrl: true, to prevent the browser to navigate here when
    // the back button is pressed in the products page after saving
    // a product
    this.router.navigate(['/seller-my-products'], {replaceUrl: true})
  }

  public navigateBack(): void {
    this.location.back();
  }
}
