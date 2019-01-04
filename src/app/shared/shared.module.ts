import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

const sharedModules = [
  CommonModule,
  FormsModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  imports: [...sharedModules],
  declarations: [],
  providers: [],
  exports: [...sharedModules]
})
export class SharedModule {}
