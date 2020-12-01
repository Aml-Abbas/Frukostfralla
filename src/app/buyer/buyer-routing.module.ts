import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
// Components
import {BuyerLoginComponent} from './components/buyer-login/buyer-login.component';
import {BuyerProfilEditorComponent} from './components/buyer-profil-editor/buyer-profil-editor.component';
import {BuyerProfileComponent} from './components/buyer-profile/buyer-profile.component';
import {BuyerSignupComponent} from './components/buyer-signup/buyer-signup.component';
import {BuyerStartComponent} from './components/buyer-start/buyer-start.component';
import {ConfirmationLoginComponent} from './components/confirmation-login/confirmation-login.component';
import {ConfirmationNoLoginComponent} from './components/confirmation-no-login/confirmation-no-login.component';
import {SellerDetailsComponent} from './components/seller-details/seller-details.component';
import {SellerProductsComponent} from '../seller/components/seller-products/seller-products.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {OrderLoginOrNotComponent} from './components/order-login-or-not/order-login-or-not.component';
import {OrderNoLoginComponent} from './components/order-no-login/order-no-login.component';
import {SellersComponent} from './components/sellers/sellers.component';
import {BuyerProductsComponent} from './components/buyer-products/buyer-products.component';
import {BuyerRootComponent} from './components/buyer-root/buyer-root.component';
import {BuyerOrderHistoryComponent} from './components/buyer-order-history/buyer-order-history.component';
import {BuyerAuthGuard} from './guards/buyer-auth.guard';
import {BuyerMapComponent} from './components/buyer-map/buyer-map.component';

const routes: Routes = [
  {
    path: '',
    component: BuyerRootComponent,
    children: [
      {path: 'buyer-profile', component: BuyerProfileComponent, canActivate: [BuyerAuthGuard]},
      {path: 'buyer-profile-editor', component: BuyerProfilEditorComponent, canActivate: [BuyerAuthGuard]},
      {path: 'confirmation-login', component: ConfirmationLoginComponent, canActivate: [BuyerAuthGuard]},
      {path: 'seller-details', component: SellerDetailsComponent},
      {path: 'seller-products', component: SellerProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'order-no-login', component: OrderNoLoginComponent},
      {path: 'sellers', component: SellersComponent},
      {path: '', component: BuyerMapComponent, canActivate: [BuyerAuthGuard]},
      {path: 'buyer-products', component: BuyerProductsComponent},
      {path: 'order-login-or-not', component: OrderLoginOrNotComponent},
      {path: 'confirmation-no-login', component: ConfirmationNoLoginComponent},
      {path: 'buyer-order-history', component: BuyerOrderHistoryComponent, canActivate: [BuyerAuthGuard]}
    ],
    canActivate: [BuyerAuthGuard]
  },
  {path: '', component: BuyerStartComponent},
  {path: 'buyer-login', component: BuyerLoginComponent},
  {path: 'buyer-signup', component: BuyerSignupComponent},
  {path: 'buyer-start', component: BuyerMapComponent},
  {path: 'buyer-map', component: BuyerMapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule {
}
