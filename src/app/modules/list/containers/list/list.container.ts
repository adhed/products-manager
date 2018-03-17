import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AuthService} from '@root/app/shared/services';
import {Product} from '@root/app/shared/models/product.model';
import {ProductService} from '@root/app/modules/list/services';

@Component({
  selector: 'my-list-container',
  templateUrl: './list.container.html',
  styleUrls: ['./list.container.scss']
})
export class ListContainerComponent implements OnInit, OnDestroy {
  @HostBinding('attr.class') public hostClass: string = 'list';

  public products$: Observable<Product[]>;

  constructor(
    private authService: AuthService,
    private productService: ProductService
  ) {}

  public ngOnInit(): void {
    this.products$ = this.productService.getAll$();
  }

  public ngOnDestroy(): void {

  }

  public onLogout(): void {
    this.authService.logout();
  }
}
