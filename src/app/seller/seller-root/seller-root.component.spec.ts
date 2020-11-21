import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerRootComponent } from './seller-root.component';

describe('SellerRootComponent', () => {
  let component: SellerRootComponent;
  let fixture: ComponentFixture<SellerRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
