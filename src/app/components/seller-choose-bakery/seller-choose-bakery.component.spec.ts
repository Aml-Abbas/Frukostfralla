import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerChooseBakeryComponent } from './seller-choose-bakery.component';

describe('SellerChooseBakeryComponent', () => {
  let component: SellerChooseBakeryComponent;
  let fixture: ComponentFixture<SellerChooseBakeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerChooseBakeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerChooseBakeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
