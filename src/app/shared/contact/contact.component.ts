import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/models/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  card:Contacts[]=[
    {
           icon:"bi bi-telephone-fill",
           title:"Phone",
           contect:"(81) 99142-6794"
    },
    {
          icon:"bi bi-google",
          title:"e-mail",
          contect:"eliasvitor.dev@gmail.com"
    },
    {
          icon:"bi bi-pin-map-fill",
          title:"address",
          contect:"Brasil/Pernambuco - belo jardim"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
