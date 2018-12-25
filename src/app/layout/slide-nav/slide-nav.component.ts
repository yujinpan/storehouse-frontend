import { Component, OnInit } from '@angular/core';
import { NavService, Nav } from 'src/app/shared/nav.service';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.less']
})
export class SlideNavComponent implements OnInit {
  menus: Nav[] = [];

  constructor(navService: NavService) {
    this.menus = navService.getNavs();
  }

  ngOnInit() {}
}
