import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerStartComponent } from './buyer-start.component';

describe('BuyerStartComponent', () => {
  let component: BuyerStartComponent;
  let fixture: ComponentFixture<BuyerStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
