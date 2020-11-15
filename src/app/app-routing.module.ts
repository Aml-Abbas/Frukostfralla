import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuyerProfileComponent} from './components/buyer-profile/buyer-profile.component';
import {BuyerSignupComponent} from './components/buyer-signup/buyer-signup.component';
import {BuyerStartComponent} from './components/buyer-start/buyer-start.component';
import {BuyerLoginComponent} from './components/buyer-login/buyer-login.component';
import {BuyerProfilEditorComponent} from './components/buyer-profil-editor/buyer-profil-editor.component';
import {SellerProfileComponent} from './components/seller-profile/seller-profile.component';
import {SellerDetailsComponent} from './components/seller-details/seller-details.component';
import {SellerMyProductsComponent} from './components/seller-my-products/seller-my-products.component';
import {SellerOrderDetailsComponent} from './components/seller-order-details/seller-order-details.component';
import {SellerProductsComponent} from './components/seller-products/seller-products.component';
import {SellersListComponent} from './components/sellers-list/sellers-list.component';
import {SellerWeekOrdersComponent} from './components/seller-week-orders/seller-week-orders.component';
import {ConfirmationLoginComponent} from './components/confirmation-login/confirmation-login.component';
import {ConfirmationNoLoginComponent} from './components/confirmation-no-login/confirmation-no-login.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {ProductEditorComponent} from './components/product-editor/product-editor.component';
import {LandingComponent} from './components/landing/landing.component';
import {SellerCreateProfileComponent} from './components/seller-create-profile/seller-create-profile.component';
import {SellerChooseBakeryComponent} from './components/seller-choose-bakery/seller-choose-bakery.component';
import {SellerStartComponent} from './components/seller-start/seller-start.component';
import {SellerNotificationsComponent} from './components/seller-notifications/seller-notifications.component';
import {SellerProfileEditorComponent} from './components/seller-profile-editor/seller-profile-editor.component';
import {OrderLoginOrNotComponent} from './components/order-login-or-not/order-login-or-not.component';
import {OrderNoLoginComponent} from './components/order-no-login/order-no-login.component';

const routes: Routes = [
  {path: 'buyer-login', component: BuyerLoginComponent},
  {path: 'buyer-profile-editor', component: BuyerProfilEditorComponent},
  {path: 'buyer-profile', component: BuyerProfileComponent},
  {path: 'buyer-signup', component: BuyerSignupComponent},
  {path: 'buyer-start', component: BuyerStartComponent},
  {path: 'confirmation-login', component: ConfirmationLoginComponent},
  {path: 'confirmation-no-login', component: ConfirmationNoLoginComponent},
  {path: 'product-editor', component: ProductEditorComponent},
  {path: 'seller-details', component: SellerDetailsComponent},
  {path: 'seller-my-products', component: SellerMyProductsComponent},
  {path: 'seller-order-details', component: SellerOrderDetailsComponent},
  {path: 'seller-products', component: SellerProductsComponent},
  {path: 'seller-week-orders', component: SellerWeekOrdersComponent},
  {path: 'seller-profile', component: SellerProfileComponent},
  {path: 'sellers-list', component: SellersListComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'seller-create-profile', component: SellerCreateProfileComponent},
  {path: 'seller-choose-bakery', component: SellerChooseBakeryComponent},
  {path: 'seller-start', component: SellerStartComponent},
  {path: 'seller-notifications', component: SellerNotificationsComponent},
  {path: 'seller-profile-editor', component: SellerProfileEditorComponent},
  {path: 'order-login-or-not', component: OrderLoginOrNotComponent},
  {path: 'order-no-login', component: OrderNoLoginComponent},
  {path: '', component: LandingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
