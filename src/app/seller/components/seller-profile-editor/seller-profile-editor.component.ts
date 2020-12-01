import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {SellerProfileService} from '../../../../services/seller-profile.service';
import {FormControl, Validators} from '@angular/forms';
import {max} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-seller-profile-editor',
  templateUrl: './seller-profile-editor.component.html',
  styleUrls: ['./seller-profile-editor.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]

})
export class SellerProfileEditorComponent implements OnInit {
  title = 'Redigera profil';

  location: Location;
  enteredPassword = '';
  hide = true;

  name: string;
  email: string;
  mobile: string;

  emailControl = new FormControl('', [Validators.email]);
  mobileControl = new FormControl(0, [
    Validators.minLength(10),
    Validators.maxLength(13)
  ]);

  constructor(location: Location,
              private profileService: SellerProfileService,
              private snackBar: MatSnackBar) {
    this.location = location;
  }

  ngOnInit(): void {
    this.name = this.profileService.getNameById('');
    this.email = this.profileService.getEmailById('');
    this.mobile = this.profileService.getMobileById('');
  }

  public navigateBack(): void {
    this.location.back();
  }

  onSave() {
    if (this.emailControl.hasError('email')
      || this.mobile.length < 10 || this.mobile.length > 13) {
      this.snackBar.open('Rätta felen.', 'Ok', {
        duration: 2000
      });
    } else if (isNaN(Number(this.mobile))) {
      this.snackBar.open('Mobilnummret kan bara innehålla siffror.', 'Ok', {
        duration: 2000
      });
    } else {
      if (this.isNameChanged()) {
        this.profileService.saveName(name);
      }
      if (this.isEmailChanged()) {
        this.profileService.saveEmail(this.email.toLowerCase());
      }
      if (this.isMobileChanged()) {
        this.profileService.saveMobile(this.mobile);
      }
      if (this.isMobileChanged() || this.isNameChanged() || this.isEmailChanged()) {
        this.snackBar.open('Ändringarna sparades', 'ok', {
          duration: 2000
        });
        this.location.back();
      } else {
        this.snackBar.open('Inga ändringar', 'ok', {
          duration: 2000
        });
        this.location.back();
      }
      console.log('isEmailChanged: ' + this.isEmailChanged());
      console.log('isNameChanged: ' + this.isNameChanged());
      console.log('isMobileChanged: ' + this.isMobileChanged());
    }
  }

  private isEmailChanged() {
    return this.email.toLowerCase() !== this.profileService.getEmailById('').toLowerCase();
  }

  private isNameChanged() {
    return this.name.toLowerCase() !== this.profileService.getNameById('').toLowerCase();
  }

  private isMobileChanged() {
    return Number(this.mobile) !== Number(this.profileService.getMobileById(''));
  }

  onCancel() {
    this.snackBar.open('Du avbröt', 'ok', {
      duration: 2000
    });
    this.location.back();
  }
}
