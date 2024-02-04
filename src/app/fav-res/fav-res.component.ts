import { Component, OnInit } from '@angular/core';
import { ResDetailsService } from '../res-details.service';

@Component({
  selector: 'app-fav-res',
  templateUrl: './fav-res.component.html',
  styleUrls: ['./fav-res.component.scss'],
})
export class FavResComponent implements OnInit {
  favResData: any = [];
  constructor(public resDetailsService: ResDetailsService) {}

  ngOnInit() {
    this.resDetailsService
      .fetchResDetails('/assets/fav-res.json')
      .subscribe((data) => {
        this.favResData = data;
        console.log(data, 'data')
      });
  }
}
