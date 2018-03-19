import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Product} from '@root/app/shared/models/product.model';

@Component({
  selector: 'my-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Input() isExpanded: boolean;

  @Output() public cardOpened: EventEmitter<void> = new EventEmitter();
  @Output() public productRemove: EventEmitter<void> = new EventEmitter();
  @Output() public productEdit: EventEmitter<void> = new EventEmitter();

  public onOpened(): void {
    this.cardOpened.emit();
  }

  public onRemoveClick(): void {
    this.productRemove.emit();
  }

  public onEditClick(): void {
    this.productEdit.emit();
  }
}
