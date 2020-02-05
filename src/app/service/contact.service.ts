import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';

export interface Contact {
  name: string,
  mail: string,
  message: string
}
const url="http://localhost:3000/contact" //adresse heroku /contact
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