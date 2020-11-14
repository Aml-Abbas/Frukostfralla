import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCreateProfileComponent } from './seller-create-profile.component';

describe('SellerCreateProfileComponent', () => {
  let component: SellerCreateProfileComponent;
  let fixture: ComponentFixture<SellerCreateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerCreateProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCreateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
