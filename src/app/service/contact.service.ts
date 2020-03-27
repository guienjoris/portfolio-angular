import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

export interface Contact {
  name: string,
  mail: string,
  message: string
}
const url="contact-post" //adresse heroku /contact
// const url = 'http://localhost:8080/contact-post'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  mailer(contact:Contact){
    const config = { headers: new HttpHeaders().set('Content-Type','application/json') };
    return this.http.post(url, contact,config)
  }
}
