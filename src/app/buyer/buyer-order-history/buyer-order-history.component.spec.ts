import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerOrderHistoryComponent } from './buyer-order-history.component';

describe('BuyerOrderHistoryComponent', () => {
  let component: BuyerOrderHistoryComponent;
  let fixture: ComponentFixture<BuyerOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerOrderHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
