import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRootComponent } from './buyer-root.component';

describe('BuyerRootComponent', () => {
  let component: BuyerRootComponent;
  let fixture: ComponentFixture<BuyerRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
