import { Routes } from '@angular/router';
import { ListContainerComponent } from './containers';
import { AuthGuard } from '@root/app/shared/guards';

export const routes: Routes = [
  { path: '', component: ListContainerComponent, canActivate: [AuthGuard] }
];
