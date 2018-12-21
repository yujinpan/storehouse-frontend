import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

interface Pv {
  state: boolean;
  total: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  pv = 0;
  title = 'storehouse';

  constructor(private homeService: HomeService ) {}

  ngOnInit() {
    this.homeService.getPv().subscribe(
      (data: Pv) => {
        this.pv = data.total;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
