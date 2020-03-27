import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ContactService, Contact} from '../service/contact.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  mailStatus: boolean = false;
  credentials: Contact={
    name: '',
    mail: '',
    message:''
  }
  error: string;

  constructor(private contactApi:ContactService) { }
  sendMail(){
    console.log(this.credentials)
      this.contactApi.mailer(this.credentials).subscribe((data) =>{
        console.log(data)
      });      
  }
  ngOnInit() {
  }

}
