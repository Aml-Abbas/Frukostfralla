import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BuyerStartComponent} from './components/buyer-start/buyer-start.component';
import {BuyerLoginComponent} from './components/buyer-login/buyer-login.component';
import {SellersListComponent} from './components/sellers-list/sellers-list.component';
import {SellerDetailsComponent} from './components/seller-details/seller-details.component';
import {SellerProductsComponent} from './components/seller-products/seller-products.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {ConfirmationLoginComponent} from './components/confirmation-login/confirmation-login.component';
import {ConfirmationNoLoginComponent} from './components/confirmation-no-login/confirmation-no-login.component';
import {BuyerSignupComponent} from './components/buyer-signup/buyer-signup.component';
import {SellerMyProductsComponent} from './components/seller-my-products/seller-my-products.component';
import {ProductEditorComponent} from './components/product-editor/product-editor.component';
import {SellerWeekOrdersComponent} from './components/seller-week-orders/seller-week-orders.component';
import {SellerOrderDetailsComponent} from './components/seller-order-details/seller-order-details.component';
import {SellerProfileComponent} from './components/seller-profile/seller-profile.component';
import {BuyerProfileComponent} from './components/buyer-profile/buyer-profile.component';
import {BuyerProfilEditorComponent} from './components/buyer-profil-editor/buyer-profil-editor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {SellerStartComponent} from './components/seller-start/seller-start.component';
import {MatButtonModule} from '@angular/material/button';
import {LandingComponent} from './components/landing/landing.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {SellerCreateProfileComponent} from './components/seller-create-profile/seller-create-profile.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {SellerChooseBakeryComponent} from './components/seller-choose-bakery/seller-choose-bakery.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import {SellerNotificationsComponent} from './components/seller-notifications/seller-notifications.component';
import { SellerProfileEditorComponent } from './components/seller-profile-editor/seller-profile-editor.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { OrderNoLoginComponent } from './components/order-no-login/order-no-login.component';
import { OrderLoginOrNotComponent } from './components/order-login-or-not/order-login-or-not.component';
import { SellerOrderHistoryComponent } from './components/seller-order-history/seller-order-history.component';
import { SellerDaysSelectionComponent } from './components/seller-days-selection/seller-days-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerStartComponent,
    BuyerLoginComponent,
    SellersListComponent,
    SellerDetailsComponent,
    SellerProductsComponent,
    ShoppingCartComponent,
    ConfirmationLoginComponent,
    ConfirmationNoLoginComponent,
    BuyerSignupComponent,
    SellerMyProductsComponent,
    ProductEditorComponent,
    SellerWeekOrdersComponent,
    SellerOrderDetailsComponent,
    SellerProfileComponent,
    BuyerProfileComponent,
    BuyerProfilEditorComponent,
    SellerStartComponent,
    LandingComponent,
    SellerCreateProfileComponent,
    SellerChooseBakeryComponent,
    SellerNotificationsComponent,
    SellerProfileEditorComponent,
    OrderNoLoginComponent,
    OrderLoginOrNotComponent,
    SellerOrderHistoryComponent,
    SellerDaysSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatRippleModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
