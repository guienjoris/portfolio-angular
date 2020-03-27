import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],

})
export class AccueilComponent implements OnInit {
  myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    displayTextStatus: boolean = false;
    
    displayText(){
      if(this.displayTextStatus === false){
      this.displayTextStatus = true;
      }else{
        this.displayTextStatus = false;
      }
    }
  constructor() { }

  ngOnInit(){
  }
}


