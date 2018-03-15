import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyContentComponent } from './shared/components';

const routes: Routes = [
  { path: 'login', loadChildren: './modules/login/#LoginModule' },
  { path: '**', component: EmptyContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
