import { Injectable } from '@angular/core';

export interface Nav {
  name: string;
  url: string;
  icon: string;
}

export const navs: Nav[] = [
  {
    name: 'Pluralsight',
    url: 'https://app.pluralsight.com/profile/yujinpan',
    icon: 'grade'
  },
  {
    name: 'Greasy Fork',
    url: 'https://greasyfork.org/zh-CN/users/226081-yujinpan',
    icon: 'widgets'
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/10916226/yujinpan',
    icon: 'help_outline'
  }
  // { name: '工具', url: '' },
  // { name: '文集', url: '' },
  // { name: 'Hello World', url: '/helloworld' },
  // { name: 'Login', url: '/login' }
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
