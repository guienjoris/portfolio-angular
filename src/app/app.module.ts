import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticlesModule } from 'angular-particle';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
