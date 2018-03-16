import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import * as containers from './containers';
import * as components from './components';
import { routes } from './login.routes';


@NgModule({
  declarations: [
    ...containers.entities,
    ...components.entities
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
