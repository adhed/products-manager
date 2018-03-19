import {ProductListComponent} from './product-list';
import {ProductComponent} from './product';
import {ProductFormComponent} from './product-form';
import {SummaryComponent} from './summary';
import {RequestResultComponent} from './request-result';
import {ConfirmRemoveDialogComponent} from './confirm-remove-dialog';

export const entities: any[] = [
  ConfirmRemoveDialogComponent,
  ProductListComponent,
  ProductComponent,
  ProductFormComponent,
  RequestResultComponent,
  SummaryComponent
];

export * from'./confirm-remove-dialog';
export * from './product-list';
export * from './product-form';
export * from './product';
export * from './request-result';
export * from './summary';
