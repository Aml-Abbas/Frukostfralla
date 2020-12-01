import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerNotificatoinsComponent } from './seller-notificatoins.component';

describe('SellerNotificatoinsComponent', () => {
  let component: SellerNotificatoinsComponent;
  let fixture: ComponentFixture<SellerNotificatoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerNotificatoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerNotificatoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
