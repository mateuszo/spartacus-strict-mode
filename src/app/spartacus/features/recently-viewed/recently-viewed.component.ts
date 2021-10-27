import { Component } from '@angular/core';
import { Product } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecentlyViewedService } from './recently-viewed.service';

@Component({
  selector: 'app-recently-viewed',
  templateUrl: './recently-viewed.component.html',
  styleUrls: ['./recently-viewed.component.scss'],
})
export class RecentlyViewedComponent {
  products$: Observable<Observable<Product>[]> = this.recentlyViewedService
    .getViewedProducts()
    .pipe(map((products: Product[]) => products.map((p) => of(p))));

  constructor(private recentlyViewedService: RecentlyViewedService) {}
}
