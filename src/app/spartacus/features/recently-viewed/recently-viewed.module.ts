import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { OutletPosition, provideOutlet } from '@spartacus/storefront';
import { SharedModule } from '../../shared/shared.module';
import { RecentlyViewedComponent } from './recently-viewed.component';
import { RecentlyViewedService } from './recently-viewed.service';

@NgModule({
  declarations: [RecentlyViewedComponent],
  imports: [CommonModule, SharedModule],
  exports: [RecentlyViewedComponent],
  providers: [
    provideOutlet({
      id: 'Section5',
      component: RecentlyViewedComponent,
      position: OutletPosition.AFTER,
    }),
    {
      provide: APP_INITIALIZER,
      useFactory: (rv: RecentlyViewedService) => () => rv.trackViewedProducts(),
      deps: [RecentlyViewedService],
      multi: true,
    },
  ],
})
export class RecentlyViewedModule {}
