import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {BuyerAuthService} from '../services/buyer-auth.service';

@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGuard implements CanActivate {
  constructor(private authService: BuyerAuthService,
              private router: Router) {

  }

  canActivate() {
    console.log('Coming from: ' + this.router.url);
    if (this.authService.isSignedIn()) {
      return true;
    } else {
      if (this.router.url == '/buyer/shopping-cart') {
        this.router.navigate(['/buyer/order-login-or-not']);
      } else if (this.router.url == '/landing') {
        this.router.navigate(['/buyer/buyer-map']);
      } else if (this.router.url == '/buyer' || this.router.url == '/') {
        this.router.navigate(['/buyer/buyer-map'])
      } else {
        this.router.navigate(['/buyer/buyer-login']);

      }

    }
  }

}
