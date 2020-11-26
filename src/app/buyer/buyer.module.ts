import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Components
import {BuyerRoutingModule} from './buyer-routing.module';
import {BuyerStartComponent} from './buyer-start/buyer-start.component';
import {BuyerLoginComponent} from './buyer-login/buyer-login.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ConfirmationLoginComponent} from './confirmation-login/confirmation-login.component';
import {ConfirmationNoLoginComponent} from './confirmation-no-login/confirmation-no-login.component';
import {BuyerSignupComponent} from './buyer-signup/buyer-signup.component';
import {SellerDetailsComponent} from '../seller/seller-details/seller-details.component';
import {SellerProductsComponent} from '../seller/seller-products/seller-products.component';
import {BuyerProfileComponent} from './buyer-profile/buyer-profile.component';
import {BuyerProfilEditorComponent} from './buyer-profil-editor/buyer-profil-editor.component';
import {OrderNoLoginComponent} from './order-no-login/order-no-login.component';
import {OrderLoginOrNotComponent} from './order-login-or-not/order-login-or-not.component';
import {BuyerProductsComponent} from './buyer-products/buyer-products.component';
import {SellersComponent} from './sellers/sellers.component';

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
import { BuyerRootComponent } from './buyer-root/buyer-root.component';
import { BuyerOrderHistoryComponent } from './buyer-order-history/buyer-order-history.component';

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
  ],
  bootstrap: [SellerProductsComponent],
  exports: [
    SellerProductsComponent
  ]
})
export class BuyerModule {
}
