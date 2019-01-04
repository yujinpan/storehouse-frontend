import { Injectable } from '@angular/core';

export interface Nav {
  name: String;
  url: String;
}

export const navs: Nav[] = [
  { name: '工具', url: '' },
  { name: '文集', url: '' },
  { name: 'Hello World', url: '/helloworld' },
  { name: 'Login', url: '/login' }
];

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private navs: Nav[] = navs;

  constructor() {}

  getNavs() {
    return this.navs;
  }
}
