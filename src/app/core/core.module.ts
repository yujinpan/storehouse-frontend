import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { LoggerService } from './logger.service';
import { LogoComponent } from './logo/logo.component';
import { SlideNavComponent } from './slide-nav/slide-nav.component';
import { MenuService } from './menu.service';

@NgModule({
  declarations: [
    NavComponent,
    SpinnerComponent,
    LogoComponent,
    SlideNavComponent
  ],
  imports: [SharedModule, RouterModule],
  exports: [NavComponent, SpinnerComponent, SlideNavComponent],
  providers: [SpinnerService, LoggerService, MenuService]
})
export class CoreModule {
  /**
   * 防止 CoreModule 被导入其他模块
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
