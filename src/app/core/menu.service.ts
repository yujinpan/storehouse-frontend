import { Injectable } from '@angular/core';

import { Menu } from './menu';
import { menus } from './menus.data';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: Menu[] = menus;

  constructor() {}

  getMenus() {
    return this.menus;
  }
}
