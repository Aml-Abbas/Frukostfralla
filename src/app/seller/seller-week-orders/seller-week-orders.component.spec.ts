import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerWeekOrdersComponent } from './seller-week-orders.component';

describe('SellerWeekOrdersComponent', () => {
  let component: SellerWeekOrdersComponent;
  let fixture: ComponentFixture<SellerWeekOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerWeekOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerWeekOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
