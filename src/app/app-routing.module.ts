import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LandingComponent} from './components/landing/landing.component';
import {UpdatePasswordComponent} from './components/update-password/update-password.component';
import {PasswordResetComponent} from './components/password-reset/password-reset.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'buyer',
    loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule),
  },
  {
    path: 'update-password',
    component: UpdatePasswordComponent
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
