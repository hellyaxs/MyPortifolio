import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-settings-color',
  templateUrl: './settings-color.component.html',
  styleUrls: ['./settings-color.component.css']
})
export class SettingsColorComponent implements OnInit {

  colors:String[] = ['tomato','#fb839e','#cc3a3b','#1fc586','#ec9412'];

  constructor(@Inject(DOCUMENT) private document: Document,
                                private renderer: Renderer2) {}

  ngOnInit(): void {}

  swicthColors(){
    this.renderer.addClass(this.document.getElementsByTagName('i'),'color');
    this.renderer.removeStyle('i','background')
    this.renderer.setStyle('i','background',this.colors[1]);
    console.log('cor mudarda');
  }

}
