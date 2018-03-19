import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output
} from '@angular/core';

import {Product} from '@root/app/shared/models/product.model';

@Component({
  selector: 'my-product-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @HostBinding('attr.class') public hostClass: string = 'product-list';

  @Input() public products: Product[] = [];
  @Output() public productRemove: EventEmitter<string> = new EventEmitter();
  @Output() public productEdit: EventEmitter<string> = new EventEmitter();

  public openedProductId: number = 0;

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
