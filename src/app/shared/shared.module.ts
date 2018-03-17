import { NgModule } from '@angular/core';

import * as components from './components';
import * as directives from './directives';
import * as services from './services';
import * as guards from './guards';
import { WindowToken, windowProvider } from './utils';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatChipsModule} from '@angular/material';

@NgModule({
  imports: [
    MatChipsModule,
    HttpClientModule
  ],
  providers: [
    ...services.entities,
    ...guards.entities,
    { provide: WindowToken, useFactory: windowProvider }
  ],
  declarations: [
    ...components.entities,
    ...directives.entities
  ],
  exports: [
    ...components.entities,
    ...directives.entities
  ]
})
export class SharedModule {}
