import { Injectable } from '@angular/core';
import FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})

export class CvService {

  constructor() { }

    downloadCV(){
      const pdfUrl = "../assets/newCV.pdf"
      const pdfName = "CVGuienJoris.pdf"
      FileSaver.saveAs(pdfUrl,pdfName)
    }
}
