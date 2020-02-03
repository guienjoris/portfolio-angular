import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'menu', component: MenuComponent, data:{animation:"menu"}},
  {path:'skills', component:SkillsComponent, data : {animation:"menu"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
