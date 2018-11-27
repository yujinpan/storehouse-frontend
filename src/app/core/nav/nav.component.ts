import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  @Output() menuStateChange = new EventEmitter<boolean>();

  private logoActive: boolean = true;

  private menus = [
    { name: '工具', url: '.' }
  ];

  ngOnInit() {

  }

  private toggleMenu() {
    this.logoActive = !this.logoActive;
    this.menuStateChange.emit(this.logoActive);
  }

}
