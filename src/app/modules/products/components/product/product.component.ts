import {Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AuthService} from '@root/app/shared/services';
import {Product} from '@root/app/shared/models/product.model';
import {HttpResponse} from '@angular/common/http';
import {ProductService} from '@root/app/modules/products/services';

@Component({
  selector: 'my-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  @Input() isExpanded: boolean;

  @Output() public cardOpened: EventEmitter<void> = new EventEmitter();
  @Output() public productRemove: EventEmitter<void> = new EventEmitter();

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {

  }

  public onOpened(): void {
    this.cardOpened.emit();
  }

  public onRemoveClick(): void {
    this.productRemove.emit();
  }

  public onEditClick(): void {
    console.log('edit');
  }
}
