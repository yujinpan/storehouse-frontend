import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HelloWorldRoutingModule } from './hello-world-routing.module';

import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [SharedModule, HelloWorldRoutingModule]
})
export class HelloWorldModule {}
