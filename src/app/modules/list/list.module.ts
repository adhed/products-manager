import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import * as containers from './containers';
import { routes } from './list.routes';


@NgModule({
  declarations: [
    ...containers.entities
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: []
})
export class ListModule { }
