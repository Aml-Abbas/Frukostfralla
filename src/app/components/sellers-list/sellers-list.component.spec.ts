import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersListComponent } from './sellers-list.component';

describe('SellersListComponent', () => {
  let component: SellersListComponent;
  let fixture: ComponentFixture<SellersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
