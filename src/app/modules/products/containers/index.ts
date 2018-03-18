import {ListContainerComponent} from './list';
import {EditProductContainerComponent} from './edit-product';
import {ProductsContainerComponent} from './products';
import {AddProductContainerComponent} from './add-product';

export const entities: any[] = [
  AddProductContainerComponent,
  EditProductContainerComponent,
  ListContainerComponent,
  ProductsContainerComponent
];

export * from './list';
export * from './add-product';
export * from './edit-product';
export * from './products';
