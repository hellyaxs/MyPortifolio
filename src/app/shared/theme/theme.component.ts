import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: Theme = 'theme-Light'

  constructor(@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initializeTheme();
  }

  initializeTheme =(): void => this.renderer.addClass(this.document.body,this.theme);
  
  swicthTheme(){
    this.document.body.classList.replace(this.theme,this.theme ==='theme-Light'
    ? (this.theme ='theme-Dark')
    :(this.theme ='theme-Light'))
  }

}

export type Theme = 'theme-Light' | 'theme-Dark';
