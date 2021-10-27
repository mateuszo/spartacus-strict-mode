import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OutletPosition, provideOutlet } from '@spartacus/storefront';
import { MyProductCartQuantityComponent } from './my-product-cart-quantity.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MyProductCartQuantityComponent],
  exports: [MyProductCartQuantityComponent],
  providers: [
    provideOutlet({
      id: 'ProductAddToCartComponent',
      component: MyProductCartQuantityComponent,
      position: OutletPosition.AFTER,
    }),
  ],
})
export class MyProductCartQuantityModule {}
