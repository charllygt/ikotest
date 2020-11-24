import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from '@app/components/product-detail/product-detail.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { ShopComponent } from './shop.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
