import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SellerRoutingModule} from './seller-routing.module';
import {SellerMyProductsComponent} from './components/seller-my-products/seller-my-products.component';
import {ProductEditorComponent} from './components/product-editor/product-editor.component';
import {SellerWeekOrdersComponent} from './components/seller-week-orders/seller-week-orders.component';
import {SellerOrderDetailsComponent} from './components/seller-order-details/seller-order-details.component';
import {SellerProfileComponent} from './components/seller-profile/seller-profile.component';
import {SellerStartComponent} from './components/seller-start/seller-start.component';
import {SellerCreateProfileComponent} from './components/seller-create-profile/seller-create-profile.component';
import {SellerChooseBakeryComponent} from './components/seller-choose-bakery/seller-choose-bakery.component';
import {SellerNotificationsComponent} from './components/seller-notifications/seller-notifications.component';
import {SellerProfileEditorComponent} from './components/seller-profile-editor/seller-profile-editor.component';
import {SellerOrderHistoryComponent} from './components/seller-order-history/seller-order-history.component';
import {SellerDaysSelectionComponent} from './components/seller-days-selection/seller-days-selection.component';
import {SellerSendToBakeryComponent} from './components/seller-send-to-bakery/seller-send-to-bakery.component';
import {SellerRootComponent} from './components/seller-root/seller-root.component';
import {SellerMapComponent} from './components/seller-map/seller-map.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule, MatRippleModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {CalendarModule} from '@syncfusion/ej2-angular-calendars';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    SellerMyProductsComponent,
    ProductEditorComponent,
    SellerWeekOrdersComponent,
    SellerOrderDetailsComponent,
    SellerProfileComponent,
    SellerStartComponent,
    SellerCreateProfileComponent,
    SellerChooseBakeryComponent,
    SellerNotificationsComponent,
    SellerProfileEditorComponent,
    SellerOrderHistoryComponent,
    SellerDaysSelectionComponent,
    SellerSendToBakeryComponent,
    SellerRootComponent,
    SellerMapComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
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
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatExpansionModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5uM21fX0xEYTcqRKgvjwVFqBs1Ve9hAc',
      libraries: ['places', 'drawing', 'geometry']
    }),
    MatStepperModule
  ],
})
export class SellerModule {
}
