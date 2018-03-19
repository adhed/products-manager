import {ProductListComponent} from './product-list';
import {ProductComponent} from './product';
import {ProductFormComponent} from '@root/app/modules/products/components/product-form';
import {SummaryComponent} from '@root/app/modules/products/components/summary/summary.component';
import {RequestResultComponent} from '@root/app/modules/products/components/request-result';

export const entities: any[] = [
  ProductListComponent,
  ProductComponent,
  ProductFormComponent,
  RequestResultComponent,
  SummaryComponent
];

export * from './product-list';
export * from './product-form';
export * from './product';
export * from './request-result';
export * from './summary';
