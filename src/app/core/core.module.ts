import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { throwIfAlreadyLoaded } from "./module-import-guard";

@NgModule({
  declarations: [NavComponent, SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent, SpinnerComponent
  ],
  providers: [SpinnerService]
})
export class CoreModule {
  /**
   * 防止 CoreModule 被导入其他模块
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
