import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-filter',
  template: `<input type="text" id="text-filter" [(ngModel)]="filter" (keyup)="filterChanged($event)" />`
})
export class TextFilterComponent {
  @Output() changed: EventEmitter<string>;

  filter: string;

  constructor() { 
    this.changed = new EventEmitter<string>();
  }
  
  clear() {
    this.filter = '';
  }

  filterChanged(event: any) {
    event.preventDefault();
    console.log(`Filter Changed: ${this.filter}`);
    this.changed.emit(this.filter);
  }

}
