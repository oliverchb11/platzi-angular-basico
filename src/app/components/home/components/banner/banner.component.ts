import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images = [1, 2, 3, 4].map((n) => `assets/images/banner${n}.jpg`);

  constructor() { }

  ngOnInit(): void {
    console.log(this.images);
  }

}
