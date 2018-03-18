import { NgModule } from '@angular/core';

import * as components from './components';
import * as directives from './directives';
import * as services from './services';
import * as guards from './guards';
import { WindowToken, windowProvider } from './utils';
import {HttpClientModule} from '@angular/common/http';
import {MatChipsModule, MatIconModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    MatChipsModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    CommonModule,
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
