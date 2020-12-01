import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {SellerAuthService} from '../services/seller-auth.service';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuard implements CanActivate {

  constructor(private authService: SellerAuthService,
              private router: Router) {
  }
  canActivate() {
    if (this.authService.isSignedIn()) {
      return true;
    } else {
      this.router.navigate(['/seller/seller-start'])
    }
  }

}
