import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavService, Nav } from 'src/app/shared/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  @Output() menuStateChange = new EventEmitter<boolean>();

  logoActive = true;
  menus: Nav[] = [];

  constructor(navService: NavService) {
    this.menus = navService.getNavs();
  }

  ngOnInit() {}

  toggleMenu() {
    this.logoActive = !this.logoActive;
    this.menuStateChange.emit(this.logoActive);
  }
}
