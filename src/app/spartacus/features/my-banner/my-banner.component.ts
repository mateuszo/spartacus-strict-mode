import { Component } from '@angular/core';
import { BannerComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-my-banner',
  templateUrl: './my-banner.component.html',
  styleUrls: ['./my-banner.component.scss'],
})
export class MyBannerComponent extends BannerComponent {}
