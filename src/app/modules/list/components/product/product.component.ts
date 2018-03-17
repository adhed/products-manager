import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AuthService} from '@root/app/shared/services';
import {Product} from '@root/app/shared/models/product.model';
import {ProductService} from '@root/app/modules/list/services/product.service';

@Component({
  selector: 'my-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  @HostBinding('attr.class') public hostClass: string = 'product';

  @Input() product: Product;

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {

  }
}
