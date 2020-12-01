import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SellerMyProductsComponent} from './components/seller-my-products/seller-my-products.component';
import {ProductEditorComponent} from './components/product-editor/product-editor.component';
import {SellerOrderDetailsComponent} from './components/seller-order-details/seller-order-details.component';
import {SellerWeekOrdersComponent} from './components/seller-week-orders/seller-week-orders.component';
import {SellerProfileComponent} from './components/seller-profile/seller-profile.component';
import {SellerCreateProfileComponent} from './components/seller-create-profile/seller-create-profile.component';
import {SellerChooseBakeryComponent} from './components/seller-choose-bakery/seller-choose-bakery.component';
import {SellerStartComponent} from './components/seller-start/seller-start.component';
import {SellerNotificationsComponent} from './components/seller-notifications/seller-notifications.component';
import {SellerProfileEditorComponent} from './components/seller-profile-editor/seller-profile-editor.component';
import {SellerOrderHistoryComponent} from './components/seller-order-history/seller-order-history.component';
import {SellerDaysSelectionComponent} from './components/seller-days-selection/seller-days-selection.component';
import {SellerSendToBakeryComponent} from './components/seller-send-to-bakery/seller-send-to-bakery.component';
import {BuyerProductsComponent} from '../buyer/components/buyer-products/buyer-products.component';
import {SellerRootComponent} from './components/seller-root/seller-root.component';
import {SellerMapComponent} from './components/seller-map/seller-map.component';
import {SellerAuthGuard} from './guards/seller-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SellerRootComponent,
    children: [
      {path: '', component: SellerMyProductsComponent, canActivate: [SellerAuthGuard]},
      {path: 'product-editor', component: ProductEditorComponent, canActivate: [SellerAuthGuard]},
      {path: 'seller-my-products', component: SellerMyProductsComponent, canActivate: [SellerAuthGuard]},
      {path: 'seller-order-details', component: SellerOrderDetailsComponent, canActivate: [SellerAuthGuard]},
      {path: 'seller-week-orders', component: SellerWeekOrdersComponent, canActivate: [SellerAuthGuard]},
      {path: 'seller-profile', component: SellerProfileComponent, canActivate: [SellerAuthGuard]},
      {path: 'seller-notifications', component: SellerNotificationsComponent, canActivate: [SellerAuthGuard]},
      {path: 'seller-profile-editor', component: SellerProfileEditorComponent, canActivate: [SellerAuthGuard]},
      {path: 'seller-order-history', component: SellerOrderHistoryComponent, canActivate: [SellerAuthGuard]},
      {path: 'seller-days-selection', component: SellerDaysSelectionComponent, canActivate: [SellerAuthGuard]},
      {path: 'seller-send-to-bakery', component: SellerSendToBakeryComponent, canActivate: [SellerAuthGuard]},
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
