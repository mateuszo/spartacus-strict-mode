import { Injectable, OnDestroy } from '@angular/core';
import { isNotNullable, Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { distinct, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecentlyViewedService implements OnDestroy {
  private _viewedProducts$ = new BehaviorSubject<Product[]>([]);
  // if you'd like to persist this data in local storage you could use StatePersistenceService from Spartacus

  public getViewedProducts(): Observable<Product[]> {
    return this._viewedProducts$.asObservable();
  }

  private subscription: Subscription;

  constructor(private currentProduct: CurrentProductService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  trackViewedProducts(): void {
    this.subscription = this.currentProduct
      .getProduct()
      .pipe(
        filter(isNotNullable),
        distinct((product) => product?.code),
        scan((acc, curr) => [curr, ...acc], [] as Product[])
      )
      .subscribe((products) => {
        this._viewedProducts$.next(products);
      });
  }
}
