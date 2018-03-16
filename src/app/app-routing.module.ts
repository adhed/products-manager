import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/list/#ListModule' },
  { path: 'list', loadChildren: './modules/list/#ListModule' },
  { path: 'login', loadChildren: './modules/login/#LoginModule' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
