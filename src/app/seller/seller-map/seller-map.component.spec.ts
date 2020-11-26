import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerMapComponent } from './seller-map.component';

describe('SellerMapComponent', () => {
  let component: SellerMapComponent;
  let fixture: ComponentFixture<SellerMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
