import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';
import { MyBannerComponent } from './my-banner.component';

@NgModule({
  imports: [CommonModule, GenericLinkModule, MediaModule],
  declarations: [MyBannerComponent],
  providers: [
    provideConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: MyBannerComponent,
        },
        BannerComponent: {
          component: MyBannerComponent,
        },
        SimpleBannerComponent: {
          component: MyBannerComponent,
        },
      },
    } as CmsConfig),
  ],
})
export class MyBannerModule {}
