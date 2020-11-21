import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ProductsService} from '../../../services/products.service';
import {Product} from '../../model/Product';
import {MatSnackBar} from '@angular/material/snack-bar';

class ImageSnippet {
  constructor(public src: string, public file: File) {
  }
}

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

  products: Product[];

  name = '';
  price = 0;

  imageSrc = 'assets/img/product-placeholder.png';

  file = null;

  constructor(router: Router, location: Location,
              private productsService: ProductsService,
              private _snackBar: MatSnackBar) {
    this.router = router;
    this.location = location;
  }

  ngOnInit(): void {
    this.products = this.productsService.getProductsBySeller('');
    console.log(this.imageSrc);
  }

  chooseImage(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      [this.file] = event.target.files;
      reader.readAsDataURL(this.file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        console.log(this.imageSrc);
        console.log(this.file.valueOf());
      }
    }
  }

  public saveProduct(): void {

    // replaceUrl: true, to prevent the browser to navigate here when
    // the back button is pressed in the products page after saving
    // a product
    if (this.productsService.saveProduct('', this.name, this.price, this.file)) {
      this.location.back();
      this._snackBar.open('Produkten sparad', 'Ok', {
        duration: 2000
      });
      this.products.push(new Product('', 'assets/img/product-placeholder.png', this.name, this.price));
    } else {
      this._snackBar.open('Fel. Försök igen senare!', 'Ok', {
        duration: 2000
      });
    }
  }

  public navigateBack(): void {
    this.location.back();
  }
}
