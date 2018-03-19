import {Component, OnDestroy} from '@angular/core';
import {ProductFormType} from '@root/app/shared/constants';
import {Product} from '@root/app/shared/models/product.model';
import {HttpErrorResponse, HttpHeaderResponse} from '@angular/common/http';
import {Page} from '@root/app/shared/constants/pages.constant';
import {ProductService} from '@root/app/modules/products/services';
import {NavigationService} from '@root/app/shared/services';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'my-add-product-component',
  templateUrl: './add-product.container.html',
  styleUrls: ['./add-product.container.scss']
})
export class AddProductContainerComponent implements OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();

  constructor(
    private productService: ProductService,
    private navigationService: NavigationService
  ) {}

  public get productFormType(): ProductFormType {
    return ProductFormType.ADD;
  }

  public ngOnDestroy(): void {
    this.destroy$.complete();
  }

  public onFormSubmit(product: Product): void {
    this.productService.addProduct(product)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (response: HttpHeaderResponse) => {
          this.navigationService.redirect(Page.PRODUCTS);
        },
        (error: HttpErrorResponse) => this.handleError(error)
      );
  }

  private handleError(error: HttpErrorResponse): void {
    console.error('There is a problem with adding a product:', error);
  }
}
