import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  theme: Theme = 'theme-Dark'
  icon: String = "bi bi-moon-fill";

  constructor(@Inject(DOCUMENT) private document: Document,
  private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initializeTheme();
  }

  initializeTheme =(): void =>{this.renderer.addClass(this.document.body,this.theme);} 
  
  
  swicthTheme(){
    this.document.body.classList.replace(this.theme,this.theme ==='theme-Light'
    ? (this.theme ='theme-Dark')
    :(this.theme ='theme-Light'))

    if(this.theme==='theme-Light'){
      this.icon ='bi bi-brightness-high-fill';
    }else{
      this.icon= 'bi bi-moon-fill';
    }
  }

}

export type Theme = 'theme-Light' | 'theme-Dark';
