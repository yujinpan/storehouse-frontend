import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { MenuService } from "../menu.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  @Output() menuStateChange = new EventEmitter<boolean>();

  private menus;
  private logoActive: boolean = true;

  constructor(menuService: MenuService) {
    this.menus = menuService.getMenus();
  }

  ngOnInit() {
  }

  private toggleMenu() {
    this.logoActive = !this.logoActive;
    this.menuStateChange.emit(this.logoActive);
  }
}
