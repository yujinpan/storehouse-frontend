import { Injectable } from '@angular/core';

import { menu } from "./menu";
import { menus } from "./menus.data";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: menu[] = menus;

  constructor() { }

  getMenus() {
    return this.menus;
  }
}
