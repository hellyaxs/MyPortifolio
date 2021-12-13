import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills:String[]= ['javascript','java','php','CSS','HTML'];
  

  constructor() { }

  ngOnInit(): void {
  }

}
