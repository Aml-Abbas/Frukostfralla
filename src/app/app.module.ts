import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { BuyerStartComponent } from './components/buyer-start/buyer-start.component';
import { BuyerLoginComponent } from './components/buyer-login/buyer-login.component';
import { SellersListComponent } from './components/sellers-list/sellers-list.component';
import { SellerDetailsComponent } from './components/seller-details/seller-details.component';
import { SellerProductsComponent } from './components/seller-products/seller-products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ConfirmationLoginComponent } from './components/confirmation-login/confirmation-login.component';
import { ConfirmationNoLoginComponent } from './components/confirmation-no-login/confirmation-no-login.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { BuyerSignupComponent } from './components/buyer-signup/buyer-signup.component';
import { SellerMyProductsComponent } from './components/seller-my-products/seller-my-products.component';
import { ProductEditorComponent } from './components/product-editor/product-editor.component';
import { SellerWeekOrdersComponent } from './components/seller-week-orders/seller-week-orders.component';
import { SellerOrderDetailsComponent } from './components/seller-order-details/seller-order-details.component';
import { SellerProfilEditorComponent } from './components/seller-profil-editor/seller-profil-editor.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { BuyerProfileComponent } from './components/buyer-profile/buyer-profile.component';
import { BuyerProfilEditorComponent } from './components/buyer-profil-editor/buyer-profil-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BuyerStartComponent,
    BuyerLoginComponent,
    SellersListComponent,
    SellerDetailsComponent,
    SellerProductsComponent,
    ShoppingCartComponent,
    ConfirmationLoginComponent,
    ConfirmationNoLoginComponent,
    ConfirmationComponent,
    BuyerSignupComponent,
    SellerMyProductsComponent,
    ProductEditorComponent,
    SellerWeekOrdersComponent,
    SellerOrderDetailsComponent,
    SellerProfilEditorComponent,
    SellerProfileComponent,
    BuyerProfileComponent,
    BuyerProfilEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
