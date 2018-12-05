import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';

import { LoggerService } from '../logger.service';
import { SpinnerService, SpinnerState } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {
  visible = false;

  private spinnerStateChanged: Subscription;

  constructor(
    private loggerService: LoggerService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit() {
    console.log(this.visible);
    this.spinnerStateChanged = this.spinnerService.spinnerState.subscribe(
      (state: SpinnerState) => {
        this.visible = state.show;
        this.loggerService.log(`visible=${this.visible}`);
      }
    );
  }

  ngOnDestory() {
    this.spinnerStateChanged.unsubscribe();
  }
}
