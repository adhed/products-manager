import { NgModule } from '@angular/core';

import * as components from './components';
import * as services from './services';
import * as guards from './guards';
import { WindowToken, windowProvider } from './utils';

@NgModule({
  imports: [],
  providers: [
    ...services.entities,
    ...guards.entities,
    { provide: WindowToken, useFactory: windowProvider }
  ],
  declarations: [
    ...components.entities
  ],
  exports: [
    ...components.entities,
  ]
})
export class SharedModule {}
