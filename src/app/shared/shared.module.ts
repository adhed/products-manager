import { NgModule } from '@angular/core';
import * as components from './components';

@NgModule({
  imports: [],
  declarations: [
    ...components.entities
  ],
  exports: [
    ...components.entities,
  ]
})
export class SharedModule {}
