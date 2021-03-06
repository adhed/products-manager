import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

import * as containers from './containers';
import * as components from './components';
import { routes } from './login.routes';
import { SharedModule } from '@root/app/shared/shared.module';


@NgModule({
  declarations: [
    ...containers.entities,
    ...components.entities
  ],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
