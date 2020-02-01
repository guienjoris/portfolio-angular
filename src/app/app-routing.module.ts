import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
