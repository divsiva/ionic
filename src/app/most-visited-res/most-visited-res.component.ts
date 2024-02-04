import { Component, OnInit } from '@angular/core';
import { ResDetailsService } from '../res-details.service';

@Component({
  selector: 'app-most-visited-res',
  templateUrl: './most-visited-res.component.html',
  styleUrls: ['./most-visited-res.component.scss'],
})
export class MostVisitedResComponent  implements OnInit {

  mostVisitedRes: any = [];
  constructor(public resDetailsService: ResDetailsService) {}

  ngOnInit() {
    this.resDetailsService
      .fetchResDetails('/assets/most-visited.json')
      .subscribe((data) => {
        this.mostVisitedRes = data;
        console.log(data, 'data')
      });
  }


}
