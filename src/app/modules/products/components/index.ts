import {ProductListComponent} from './product-list';
import {ProductComponent} from './product';
import {ProductFormComponent} from '@root/app/modules/products/components/product-form';
import {SummaryComponent} from '@root/app/modules/products/components/summary/summary.component';

export const entities: any[] = [
  ProductListComponent,
  ProductComponent,
  ProductFormComponent,
  SummaryComponent
];

export * from './product-list';
export * from './product-form';
export * from './product';
export * from './summary';
