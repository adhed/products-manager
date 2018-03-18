import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductFormType} from '@root/app/shared/constants';
import {Product} from '@root/app/shared/models/product.model';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '@root/app/modules/products/services';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'my-edit-product-component',
  templateUrl: './edit-product.container.html',
  styleUrls: ['./edit-product.container.scss']
})
export class EditProductContainerComponent implements OnInit, OnDestroy {
  public get productFormType(): ProductFormType {
    return ProductFormType.EDIT;
  }

  public product$: Observable<Product>;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((params: ParamMap) => {
        this.product$ = this.productService.getProduct(
          params.get('productId')
        );
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.complete();
  }
}
