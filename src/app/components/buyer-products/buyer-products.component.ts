import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer-products',
  templateUrl: './buyer-products.component.html',
  styleUrls: ['./buyer-products.component.scss']
})
export class BuyerProductsComponent implements OnInit {

  constructor() { }
  title = 'Säljarens frallor';
  item = 'hello';
  itemId = '1';
  ngOnInit(): void {
  }

  addToCard(itemId: string): void {

  }
}
