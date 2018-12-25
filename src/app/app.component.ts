import { Component, OnInit } from '@angular/core';
import { StatService } from './shared/stat.service';

interface Pv {
  state: boolean;
  total: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  pv = 0;
  title = 'storehouse';

  constructor(private statService: StatService) {}

  ngOnInit() {
    this.statService.getPv().subscribe(
      (data: Pv) => {
        this.pv = data.total;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
