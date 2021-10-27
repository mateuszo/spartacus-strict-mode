import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  GlobalMessageComponentModule,
  KeyboardFocusModule,
  OutletModule,
  OutletRefModule,
  PageLayoutModule,
  PageSlotModule,
  SkipLinkModule,
} from '@spartacus/storefront';
import { MyStorefrontComponent } from './my-storefront.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PageLayoutModule,
    PageSlotModule,
    KeyboardFocusModule,
    SkipLinkModule,
  ],
  declarations: [MyStorefrontComponent],
  exports: [MyStorefrontComponent],
})
export class MyStorefrontModule {}
