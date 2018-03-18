import {ProductListComponent} from './product-list';
import {ProductComponent} from './product';
import {ProductFormComponent} from '@root/app/modules/products/components/product-form';

export const entities: any[] = [
  ProductListComponent,
  ProductComponent,
  ProductFormComponent
];

export * from './product-list';
export * from './product-form';
export * from './product';
