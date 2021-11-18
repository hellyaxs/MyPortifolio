
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/nav-bar.component';
import { HomeComponent } from './shared/home/home.component';
import { RouterModule } from '@angular/router';
import { SettingsColorComponent } from './shared/settings-color/settings-color.component';
import { ThemeComponent } from './shared/theme/theme.component';
import { SharedComponent } from './about/shared/shared.component';
import { AboutComponent } from './shared/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SettingsColorComponent,
    ThemeComponent,
    SharedComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
