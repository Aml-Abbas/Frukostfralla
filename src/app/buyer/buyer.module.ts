import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Components
import {BuyerRoutingModule} from './buyer-routing.module';
import {BuyerStartComponent} from './components/buyer-start/buyer-start.component';
import {BuyerLoginComponent} from './components/buyer-login/buyer-login.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {ConfirmationLoginComponent} from './components/confirmation-login/confirmation-login.component';
import {ConfirmationNoLoginComponent} from './components/confirmation-no-login/confirmation-no-login.component';
import {BuyerSignupComponent} from './components/buyer-signup/buyer-signup.component';
import {SellerDetailsComponent} from '../seller/components/seller-details/seller-details.component';
import {SellerProductsComponent} from '../seller/components/seller-products/seller-products.component';
import {BuyerProfileComponent} from './components/buyer-profile/buyer-profile.component';
import {BuyerProfilEditorComponent} from './components/buyer-profil-editor/buyer-profil-editor.component';
import {OrderNoLoginComponent} from './components/order-no-login/order-no-login.component';
import {OrderLoginOrNotComponent} from './components/order-login-or-not/order-login-or-not.component';
import {BuyerProductsComponent} from './components/buyer-products/buyer-products.component';
import {SellersComponent} from './components/sellers/sellers.component';
import {BuyerMapComponent} from './components/buyer-map/buyer-map.component';

// Angular Material Modules
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule, MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {CalendarModule} from '@syncfusion/ej2-angular-calendars';
import { BuyerRootComponent } from './components/buyer-root/buyer-root.component';
import { BuyerOrderHistoryComponent } from './components/buyer-order-history/buyer-order-history.component';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    BuyerLoginComponent,
    BuyerStartComponent,
    ShoppingCartComponent,
    ConfirmationLoginComponent,
    ConfirmationNoLoginComponent,
    BuyerSignupComponent,
    SellerDetailsComponent,
    SellerProductsComponent,
    BuyerProfileComponent,
    BuyerProfilEditorComponent,
    OrderNoLoginComponent,
    OrderLoginOrNotComponent,
    BuyerProductsComponent,
    SellersComponent,
    BuyerRootComponent,
    BuyerOrderHistoryComponent,
    BuyerMapComponent
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
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
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    CalendarModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5uM21fX0xEYTcqRKgvjwVFqBs1Ve9hAc',
      libraries: ['places', 'drawing', 'geometry']
    })
  ],
  bootstrap: [SellerProductsComponent],
  exports: [
    SellerProductsComponent
  ]
})
export class BuyerModule {
}
