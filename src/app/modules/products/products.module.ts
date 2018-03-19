import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';

import * as containers from './containers';
import * as components from './components';
import * as services from './services';
import { routes } from './products.routes';
import {SharedModule} from '@root/app/shared/shared.module';

import {AuthTokenInterceptor} from '@root/app/modules/products/services';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ...containers.entities,
    ...components.entities
  ],
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    SharedModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ...services.entities,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: []
})
export class ProductsModule { }
