import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {
  title = 'Lägg en ny fralla';

  constructor() { }

  ngOnInit(): void {
  }

  public chooseImage(): void {

  }
}
