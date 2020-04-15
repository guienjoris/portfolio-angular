import { Component, OnInit } from '@angular/core';
import { CvService } from '../service/cv.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( private cv: CvService) { }

  ngOnInit() {
  }
  cvDownload(){
    return this.cv.downloadCV();
  }
}
