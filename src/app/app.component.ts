import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { slideInAnimation } from './route-animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit{
  currentComponentStatus: boolean = false;
  constructor(private _location: Location, private router: Router) 
  {}
  backClicked() {
    this._location.back();
  }
    ngOnInit(){
      this.router.events.subscribe(event =>{
        if(this._location.path() ==="/menu"){
          this.currentComponentStatus = true
        }else{
          this.currentComponentStatus = false;
        }
      })
  }
  
}

