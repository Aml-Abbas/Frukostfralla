import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDaysSellectionComponent } from './seller-days-sellection.component';

describe('SellerDaysSellectionComponent', () => {
  let component: SellerDaysSellectionComponent;
  let fixture: ComponentFixture<SellerDaysSellectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerDaysSellectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDaysSellectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
