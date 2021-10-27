import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CmsConfig, ConfigModule, UrlModule } from '@spartacus/core';
import { IconConfig, IconModule, PageSlotModule } from '@spartacus/storefront';
import { MyLoginComponent } from './my-login.component';

@NgModule({
  declarations: [MyLoginComponent],
  imports: [
    CommonModule,
    UrlModule,
    RouterModule,
    PageSlotModule,
    IconModule,
    ConfigModule.withConfig({
      cmsComponents: {
        LoginComponent: {
          component: MyLoginComponent,
        },
      },
    } as CmsConfig),
    ConfigModule.withConfig({
      icon: {
        symbols: {
          USER: 'fas fa-user',
        },
      },
    } as IconConfig),
  ],
})
export class MyLoginModule {}
