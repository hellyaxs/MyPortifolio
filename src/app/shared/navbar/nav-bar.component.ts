import { Component } from "@angular/core";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navBar.component.css']
})
export class NavbarComponent{

    components:String[]=['Home','About','Services','Portifolio','Testimoinal','Contact']

}