import {Component, OnInit} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {SellerProfileService} from '../../../services/seller-profile.service';
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
  mobileControl = new FormControl('', [
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

  getEmailError() {
    return this.emailControl.hasError('email') ? 'Ogiltig mejladdress' : '';
  }

  onSave() {
    if (this.emailControl.hasError('email')
      || this.mobileControl.hasError('min')
      || this.mobileControl.hasError('max')) {
      this.snackBar.open('Rätta felen.', 'Ok', {
        duration: 2000
      });
    } else if (isNaN(Number(this.mobile))) {
      this.snackBar.open('Mobilnummer kan bara innehålla siffror.', 'Ok', {
        duration: 2000
      });
    } else {
      if (this.changeName()) {
        this.profileService.saveName(name);
      }
      if (this.changeEmail()) {
        this.profileService.saveEmail(this.email.toLowerCase());
      }
      if (this.changeMobile()) {
        this.profileService.saveMobile(this.mobile);
      }
      if (this.changeMobile() || this.changeName() || this.changeEmail()) {
        this.snackBar.open('Ändringar sparades', 'ok', {
          duration: 2000
        });
      } else {
        this.snackBar.open('Inga ändringar', 'ok', {
          duration: 2000
        });
      }
      this.location.back();
    }
  }

  private changeEmail() {
    return this.email.toLowerCase() !== this.profileService.getEmailById('').toLowerCase()
      || this.email !== '';
  }

  private changeName() {
    return this.name.toLowerCase() !== this.profileService.getNameById('').toLowerCase()
      || this.name !== '';
  }

  private changeMobile() {
    return this.mobile !== this.profileService.getEmailById('')
      || this.mobile !== '';
  }

  onCancel() {
    this.snackBar.open('Du avbröt', 'ok', {
      duration: 2000
    });
    this.location.back();
  }
}
