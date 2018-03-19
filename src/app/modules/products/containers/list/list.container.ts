import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {Subject} from 'rxjs/Subject';
import {filter, take, takeUntil, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

import {AuthService, NavigationService} from '@root/app/shared/services';
import {Product} from '@root/app/shared/models/product.model';
import {ProductService} from '@root/app/modules/products/services';
import {Page} from '@root/app/shared/constants/pages.constant';
import {ConfirmRemoveDialogComponent} from '@root/app/modules/products/components';

@Component({
  selector: 'my-list-container',
  templateUrl: './list.container.html',
  styleUrls: ['./list.container.scss']
})
export class ListContainerComponent implements OnInit, OnDestroy {
  @HostBinding('attr.class') public hostClass: string = 'list';

  public products$: Observable<Product[]>;
  public destroy$: Subject<void> = new Subject();
  public isLoading: boolean = false;
  public readonly noProductsError: string = `Sorry, there're no results`;

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.isLoading = true;
    this.products$ = this.productService.getAll()
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.isLoading = false)
      );
  }

  public ngOnDestroy(): void {
    this.destroy$.complete();
  }

  public onProductRemoveClick(productId: string): void {
    this.openDialog(productId);
  }

  public onProductEditClick(productId: string): void {
    this.navigationService.redirect(
      Page.EDIT_PRODUCT,
      productId
    );
  }

  public refreshProductList(): void {
    this.products$ = this.productService.getAll()
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.isLoading = false)
      );
  }

  public onAddButtonClick(): void {
    this.navigationService.redirect(Page.ADD_PRODUCT);
  }

  private openDialog(productId: string): void {
    const dialogRef = this.dialog.open(ConfirmRemoveDialogComponent);

    dialogRef.afterClosed()
      .pipe(
        filter((confirmed: boolean) => confirmed),
        take(1)
      )
      .subscribe(() => this.removeProduct(productId));
  }

  private removeProduct(productId: string): void {
    this.productService.removeProduct(productId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: HttpResponse<void>) => {
        this.refreshProductList();
      });
  }
}
