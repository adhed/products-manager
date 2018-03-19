import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '@root/app/modules/products/services';
import {Subject} from 'rxjs/Subject';
import {RequestResult} from '@root/app/shared/models/request-result.model';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {RequestResultComponent} from '@root/app/modules/products/components';

@Component({
  selector: 'my-products-container',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
export class ProductsContainerComponent implements OnInit, OnDestroy {
  @ViewChild('requestResult') public resultComponent: RequestResultComponent;

  public requestResult$: Subject<RequestResult>;
  private destroy$: Subject<void> = new Subject();

  constructor(private productService: ProductService, private router: Router) {}

  public ngOnInit(): void {
    this.requestResult$ = this.productService.requestResult$;
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.hideRequestResult());
  }

  public ngOnDestroy(): void {
    this.destroy$.complete();
  }

  private hideRequestResult(): void {
    this.resultComponent.hideResult();
  }
}
