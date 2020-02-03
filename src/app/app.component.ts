import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  currentComponentStatus: boolean = false;
  constructor(private _location: Location, private router:Router) 
  {}
  backClicked() {
    this._location.back();
  }
    ngOnInit(){
  }
  onActivate(componentRef:any){
    console.log(componentRef)
    if(componentRef === MenuComponent){
      this.currentComponentStatus = true;
    }
    console.log(this.currentComponentStatus)

  }
}

