import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

import { NavService } from './nav.service';
import { LoggerService } from './logger.service';
import { StatService } from './stat.service';

const MatModules = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  imports: [CommonModule, FormsModule, ...MatModules],
  declarations: [],
  providers: [NavService, LoggerService, StatService],
  exports: [CommonModule, FormsModule, ...MatModules]
})
export class SharedModule {}
