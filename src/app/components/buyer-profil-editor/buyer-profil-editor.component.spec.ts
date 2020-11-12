import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerProfilEditorComponent } from './buyer-profil-editor.component';

describe('BuyerProfilEditorComponent', () => {
  let component: BuyerProfilEditorComponent;
  let fixture: ComponentFixture<BuyerProfilEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerProfilEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerProfilEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
