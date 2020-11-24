import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import {BuyerLoginComponent} from './buyer-login/buyer-login.component';
import {BuyerProfilEditorComponent} from './buyer-profil-editor/buyer-profil-editor.component';
import {BuyerProfileComponent} from './buyer-profile/buyer-profile.component';
import {BuyerSignupComponent} from './buyer-signup/buyer-signup.component';
import {BuyerStartComponent} from './buyer-start/buyer-start.component';
import {ConfirmationLoginComponent} from './confirmation-login/confirmation-login.component';
import {ConfirmationNoLoginComponent} from './confirmation-no-login/confirmation-no-login.component';
import {SellerDetailsComponent} from '../seller/seller-details/seller-details.component';
import {SellerProductsComponent} from '../seller/seller-products/seller-products.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {OrderLoginOrNotComponent} from './order-login-or-not/order-login-or-not.component';
import {OrderNoLoginComponent} from './order-no-login/order-no-login.component';
import {SellersComponent} from './sellers/sellers.component';
import {BuyerProductsComponent} from './buyer-products/buyer-products.component';
import {BuyerRootComponent} from './buyer-root/buyer-root.component';

const routes: Routes = [
  {
  path: '',
  component: BuyerRootComponent,
  children: [
  {path: 'buyer-profile', component: BuyerProfileComponent},
  {path: 'confirmation-login', component: ConfirmationLoginComponent},
  {path: 'seller-details', component: SellerDetailsComponent},
  {path: 'seller-products', component: SellerProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'order-no-login', component: OrderNoLoginComponent},
  {path: 'sellers', component: SellersComponent},
  {path: 'buyer-products', component: BuyerProductsComponent},
  {path: '', component: BuyerProductsComponent}
  ]},
  {path: 'buyer-login', component: BuyerLoginComponent},
  {path: 'buyer-profile-editor', component: BuyerProfilEditorComponent},
  {path: 'buyer-signup', component: BuyerSignupComponent},
  {path: 'buyer-start', component: BuyerStartComponent},
  {path: 'order-login-or-not', component: OrderLoginOrNotComponent},
  {path: 'confirmation-no-login', component: ConfirmationNoLoginComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
