import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { InitCapsPipe } from './init-caps.pipe';
import { TextFilterComponent } from './text-filter.component';
import { TextFilterService } from './text-filter.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    InitCapsPipe,
    TextFilterComponent
  ],
  providers: [
    TextFilterService
  ],
  exports: [
    CommonModule,
    FormsModule,
    TextFilterComponent,
    InitCapsPipe
  ]
})
export class SharedModule { }
