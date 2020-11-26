import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SellerMyProductsComponent} from './seller-my-products/seller-my-products.component';
import {ProductEditorComponent} from './product-editor/product-editor.component';
import {SellerOrderDetailsComponent} from './seller-order-details/seller-order-details.component';
import {SellerWeekOrdersComponent} from './seller-week-orders/seller-week-orders.component';
import {SellerProfileComponent} from './seller-profile/seller-profile.component';
import {SellerCreateProfileComponent} from './seller-create-profile/seller-create-profile.component';
import {SellerChooseBakeryComponent} from './seller-choose-bakery/seller-choose-bakery.component';
import {SellerStartComponent} from './seller-start/seller-start.component';
import {SellerNotificationsComponent} from './seller-notifications/seller-notifications.component';
import {SellerProfileEditorComponent} from './seller-profile-editor/seller-profile-editor.component';
import {SellerOrderHistoryComponent} from './seller-order-history/seller-order-history.component';
import {SellerDaysSelectionComponent} from './seller-days-selection/seller-days-selection.component';
import {SellerSendToBakeryComponent} from './seller-send-to-bakery/seller-send-to-bakery.component';
import {BuyerProductsComponent} from '../buyer/buyer-products/buyer-products.component';
import {SellerRootComponent} from './seller-root/seller-root.component';
import {SellerMapComponent} from './seller-map/seller-map.component';

const routes: Routes = [
  {
    path: '',
    component: SellerRootComponent,
    children: [
      {path: '', component: SellerMyProductsComponent},
      {path: 'product-editor', component: ProductEditorComponent},
      {path: 'seller-my-products', component: SellerMyProductsComponent},
      {path: 'seller-order-details', component: SellerOrderDetailsComponent},
      {path: 'seller-week-orders', component: SellerWeekOrdersComponent},
      {path: 'seller-profile', component: SellerProfileComponent},
      {path: 'seller-notifications', component: SellerNotificationsComponent},
      {path: 'seller-profile-editor', component: SellerProfileEditorComponent},
      {path: 'seller-order-history', component: SellerOrderHistoryComponent},
      {path: 'seller-days-selection', component: SellerDaysSelectionComponent},
      {path: 'seller-send-to-bakery', component: SellerSendToBakeryComponent},
    ]
  },
  {path: 'seller-create-profile', component: SellerCreateProfileComponent},
  {path: 'choose-bakery', component: SellerChooseBakeryComponent},
  {path: 'seller-start', component: SellerStartComponent},
  {path: 'seller-map', component: SellerMapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
