import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/products/#ProductsModule' },
  { path: 'products', loadChildren: './modules/products/#ProductsModule' },
  { path: 'login', loadChildren: './modules/login/#LoginModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
