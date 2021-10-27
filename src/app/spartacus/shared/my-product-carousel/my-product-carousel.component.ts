import { Component, Input } from '@angular/core';
import { Product } from '@spartacus/core/src/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-product-carousel',
  templateUrl: './my-product-carousel.component.html',
  styleUrls: ['./my-product-carousel.component.scss'],
})
export class MyProductCarouselComponent {
  @Input()
  products: Observable<Product>[] = [];

  @Input()
  title: string = '';
}
