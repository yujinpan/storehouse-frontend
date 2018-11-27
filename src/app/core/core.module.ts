import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatButtonModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';

import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { LoggerService } from './logger.service';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [NavComponent, SpinnerComponent, LogoComponent],
  imports: [
    MatButtonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavComponent, SpinnerComponent
  ],
  providers: [SpinnerService, LoggerService]
})
export class CoreModule {
  /**
   * 防止 CoreModule 被导入其他模块
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
