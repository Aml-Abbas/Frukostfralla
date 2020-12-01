import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerDaysSelectionComponent } from './seller-days-selection.component';

describe('SellerDaysSelectionComponent', () => {
  let component: SellerDaysSelectionComponent;
  let fixture: ComponentFixture<SellerDaysSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerDaysSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerDaysSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
