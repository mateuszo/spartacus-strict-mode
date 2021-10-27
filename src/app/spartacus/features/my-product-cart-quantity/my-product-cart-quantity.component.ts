import { Component } from '@angular/core';
import { ActiveCartService } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-my-product-cart-quantity',
  templateUrl: './my-product-cart-quantity.component.html',
  styleUrls: ['./my-product-cart-quantity.component.scss'],
})
export class MyProductCartQuantityComponent {
  quantity$: Observable<number> = this.currentProductService.getProduct().pipe(
    map((product) => product?.code),
    switchMap((code) => this.activeCartService.getEntry(code)),
    map((orderEntry) => orderEntry?.quantity || 0)
  );

  constructor(
    private currentProductService: CurrentProductService,
    private activeCartService: ActiveCartService
  ) {}
}
