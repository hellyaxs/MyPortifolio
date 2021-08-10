import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

 @Input()
  rating:number = 2;
  ratingWidth!: number;

  ngOnInit(): void {
    this.ratingWidth = this.rating *94/5;
  }

}
