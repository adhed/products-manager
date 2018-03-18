import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AuthService} from '@root/app/shared/services';
import {Product} from '@root/app/shared/models/product.model';
import {ProductService} from '@root/app/modules/products/services';

@Component({
  selector: 'my-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  @HostBinding('attr.class') public hostClass: string = 'product-list';

  @Input() public products: Product[] = [];
  @Output() public productRemove: EventEmitter<string> = new EventEmitter();
  @Output() public productEdit: EventEmitter<string> = new EventEmitter();

  public openedProductId: number = 0;

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {

  }

  public trackByProductId(index: number, product: Product): string | number {
    return product.productID || index;
  }

  public onCardOpened(index: number): void {
    this.openedProductId = index;
  }

  public onProductRemove(productID: string): void {
    this.productRemove.emit(productID);
  }

  public onProductEdit(productID: string): void {
    this.productEdit.emit(productID);
  }

  public isCardOpened(index: number): boolean {
    return index === this.openedProductId;
  }
}
