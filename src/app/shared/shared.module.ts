import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MatChipsModule, MatIconModule, MatToolbarModule, MatTooltipModule} from '@angular/material';

import * as components from './components';
import * as directives from './directives';
import * as services from './services';
import * as guards from './guards';
import { WindowToken, windowProvider } from './utils';

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
