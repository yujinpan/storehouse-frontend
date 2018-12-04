import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

class Pv {
  state: boolean;
  total: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  pv = 0;
  title = 'storehouse';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getPv()
      .subscribe((data: Pv) => {
        this.pv = data.total;
      }, error => {
        console.log(error);
      });
  }
}
