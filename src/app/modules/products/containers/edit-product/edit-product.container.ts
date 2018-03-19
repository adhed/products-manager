import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {HttpErrorResponse, HttpHeaderResponse} from '@angular/common/http';
import {takeUntil} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {ProductFormType} from '@root/app/shared/constants';
import {Product} from '@root/app/shared/models/product.model';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductService} from '@root/app/modules/products/services';
import {Page} from '@root/app/shared/constants/pages.constant';
import {NavigationService} from '@root/app/shared/services';

@Component({
  selector: 'my-edit-product-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit-product.container.html',
  styleUrls: ['./edit-product.container.scss']
})
export class EditProductContainerComponent implements OnInit, OnDestroy {
  public product$: Observable<Product>;
  private destroy$: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private navigationService: NavigationService
  ) {}

  public get productFormType(): ProductFormType {
    return ProductFormType.EDIT;
  }

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        this.product$ = this.productService.getProduct(
          params.get('productId')
        );
      });
  }

  public onFormSubmit(product: Product): void {
    this.productService
      .updateProduct(product.productID, product)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (response: HttpHeaderResponse) => {
          this.navigationService.redirect(Page.PRODUCTS);
        },
        (error: HttpErrorResponse) => this.handleError(error)
      );
  }

  private handleError(error: HttpErrorResponse): void {
    console.error('There is a problem with updating a product:', error);
  }

  public ngOnDestroy(): void {
    this.destroy$.complete();
  }
}
