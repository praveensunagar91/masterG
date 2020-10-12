import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TermsdataService {

  url:string=endpoints.termsConditions;
  constructor(private http:HttpClient) { }

  termsConditions(){
    return this.http.get(this.url,{headers:null});
  }
}
