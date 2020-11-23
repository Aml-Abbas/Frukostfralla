import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductEditorService {

  private productId = new Subject<string>();
  private editing = new Subject<boolean>()

  currentId$ = this.productId.asObservable();
  isEditing$ = this.editing.asObservable();

  constructor() { }

  setProductId(id: string) {
    this.productId.next(id);
  }

  setEditing(editing: boolean) {
    this.editing.next(editing);

  }

  getName(): string {
    return 'Baguette'
  }

  getPrice(): number {
    return 10;
  }

  getImageUrl(): string {
    return 'assets/img/fralla1.jpg'
  }
}
