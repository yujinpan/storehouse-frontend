import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InitCapsPipe } from './init-caps.pipe';
import { TextFilterComponent } from './text-filter.component';
import { TextFilterService } from './text-filter.service';

import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

const MatModules = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  imports: [CommonModule, FormsModule, ...MatModules],
  declarations: [InitCapsPipe, TextFilterComponent],
  providers: [TextFilterService],
  exports: [
    CommonModule,
    FormsModule,
    TextFilterComponent,
    InitCapsPipe,
    ...MatModules
  ]
})
export class SharedModule {}
