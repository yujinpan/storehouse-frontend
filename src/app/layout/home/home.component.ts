import { Component, OnInit } from '@angular/core';

import { StatService } from 'src/app/core/stat.service';
import { Nav, NavService } from 'src/app/core/nav.service';

interface Pv {
  state: boolean;
  total: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  menus: Nav[] = [];
  pv = 0;
  title = 'storehouse';

  constructor(
    private statService: StatService,
    private navService: NavService
  ) {}

  ngOnInit() {
    // menus
    this.menus = this.navService.getNavs();

    // pv
    this.statService.getPv().subscribe(
      (data: Pv) => {
        this.pv = data.total;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
