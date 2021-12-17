import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  skills:Redes[]= [
    {
      icon:'javascript',
      link:'30'
    },
    {
     icon:'HTML',
     link:"50"
    },
    {
      icon:'php',
      link:"50"
     },
     {
      icon:'CSS',
      link:"90"
     },
     {
      icon:'java',
      link:"70"
     },
  
];
  redesSocial:Redes[]=[
    {
      icon:"bi bi-github",
      link:"https://github.com/hellyaxs"
    },
    {
      icon:"bi bi-google",
      link:"mailto:eliasvitor.dev@gmail.com"
    },
    {
      icon:"bi bi-instagram",
      link:"https://www.instagram.com/elias.vitor13/"
    },
    {
      icon:"bi bi-linkedin",
      link:"https://www.linkedin.com/in/elias-vitordev"
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
export interface Redes {
  "icon":string;
  "link":String;
  
}
