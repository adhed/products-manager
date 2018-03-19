import { Routes } from '@angular/router';

import {
  AddProductContainerComponent,
  EditProductContainerComponent,
  ListContainerComponent,
  ProductsContainerComponent
} from './containers';
import { AuthGuard } from '@root/app/shared/guards';

export const routes: Routes = [
  {
    path: '',
    component: ProductsContainerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ListContainerComponent },
      { path: 'add', component: AddProductContainerComponent },
      { path: 'edit/:productId', component: EditProductContainerComponent }
    ]
  },
];
