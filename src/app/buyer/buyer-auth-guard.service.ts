import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {BuyerAuthService} from './services/buyer-auth.service';

@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: BuyerAuthService) {
  }

  canActivate() {
    if (this.authService.isSignedIn()) {
      return true;
    } else {
      this.router.navigate(['/buyer/buyer-start']);
      return false;
    }
  }

}
