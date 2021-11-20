import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-color',
  templateUrl: './settings-color.component.html',
  styleUrls: ['./settings-color.component.css']
})
export class SettingsColorComponent implements OnInit {

  colors:String[] = ['backgroud-color:tomato;'];

  constructor() { }

  ngOnInit(): void {
  }

}
