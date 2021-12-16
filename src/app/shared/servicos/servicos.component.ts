import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/models/contacts';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  conteudo:Contacts[]=[
    {
      icon:"bi bi-controller",
      title:"desing graph",
      contect:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem"
    },
    {
      icon:"bi bi-controller",
      title:"desing graph",
      contect:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem"
    },
    {
      icon:"bi bi-palette-fill",
      title:"desing graph",
      contect:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
