import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProfilEditorComponent } from './seller-profil-editor.component';

describe('SellerProfilEditorComponent', () => {
  let component: SellerProfilEditorComponent;
  let fixture: ComponentFixture<SellerProfilEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerProfilEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerProfilEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
