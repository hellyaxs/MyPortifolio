import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit, Renderer2 } from "@angular/core";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navBar.component.css']
})
export class NavbarComponent implements OnInit{


     constructor(@Inject(DOCUMENT) private document: Document,
                                   private renderer: Renderer2){}
    ngOnInit(): void {
        
    }

    modalSwitch(){
        
    }
}

export type Check = 'bi bi-x-lg' | 'bi bi-list' ;