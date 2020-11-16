import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSendToBakeryComponent } from './seller-send-to-bakery.component';

describe('SellerSendToBakeryComponent', () => {
  let component: SellerSendToBakeryComponent;
  let fixture: ComponentFixture<SellerSendToBakeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSendToBakeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerSendToBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
