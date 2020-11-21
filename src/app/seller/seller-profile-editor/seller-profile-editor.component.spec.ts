import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProfileEditorComponent } from './seller-profile-editor.component';

describe('SellerProfileEditorComponent', () => {
  let component: SellerProfileEditorComponent;
  let fixture: ComponentFixture<SellerProfileEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerProfileEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
