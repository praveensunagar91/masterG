import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactdataService {

  url:string=endpoints.contactUs;
  constructor(private http:HttpClient) { }

  contact(){
    return this.http.get(this.url,{headers:null});
  }
}
