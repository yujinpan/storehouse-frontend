import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.less']
})
export class SlideNavComponent implements OnInit {
  menus;

  constructor(menuService: MenuService) {
    this.menus = menuService.getMenus();
  }

  ngOnInit() {}
}
