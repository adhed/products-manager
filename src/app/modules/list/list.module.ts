import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import * as containers from './containers';
import * as components from './components';
import * as services from './services';
import { routes } from './list.routes';
import {AuthTokenInterceptor} from '@root/app/modules/list/services';


@NgModule({
  declarations: [
    ...containers.entities,
    ...components.entities
  ],
  imports: [
    CommonModule,
    HttpClientModule,
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
export class ListModule { }
