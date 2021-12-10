
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/nav-bar.component';
import { HomeComponent } from './shared/home/home.component';
import { RouterModule } from '@angular/router';
import { SettingsColorComponent } from './shared/settings-color/settings-color.component';
import { ThemeComponent } from './shared/theme/theme.component';

import { AboutComponent } from './shared/about/about.component';
import { ContactComponent } from './shared/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SettingsColorComponent,
    ThemeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
   
      { path:'home' , component:HomeComponent},
      { path:'about' , component:AboutComponent},
      { path:'contact', component:ContactComponent}
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
