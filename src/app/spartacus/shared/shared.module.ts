import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingModule, UrlModule } from '@spartacus/core';
import { CarouselModule, MediaModule } from '@spartacus/storefront';
import { MyProductCarouselComponent } from './my-product-carousel/my-product-carousel.component';



@NgModule({
  declarations: [MyProductCarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    MediaModule,
    RouterModule,
    RoutingModule,
    UrlModule
  ],
  exports: [MyProductCarouselComponent]

})
export class SharedModule { }
