import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductListComponent } from '@app/components/product-list/product-list.component';
import { ProductItemComponent } from '@app/components/product-item/product-item.component';
import { ProductDetailComponent } from '@app/components/product-detail/product-detail.component';

@NgModule({
  declarations: [ShopComponent, ProductListComponent, ProductItemComponent, ProductDetailComponent],
  imports: [CommonModule, ShopRoutingModule],
})
export class ShopModule {}
