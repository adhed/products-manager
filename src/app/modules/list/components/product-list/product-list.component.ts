import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AuthService} from '@root/app/shared/services';
import {Product} from '@root/app/shared/models/product.model';
import {ProductService} from '@root/app/modules/list/services/product.service';

@Component({
  selector: 'my-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @HostBinding('attr.class') public hostClass: string = 'product-list';

  @Input() products: Product[] = [];

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {

  }

  public trackByProductId(index: number, product: Product): string | number {
    return product.productID || index;
  }
}
