import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AboutdataService {

  url:string=endpoints.aboutUs;

  constructor(private http:HttpClient) { }

  about(){
    return this.http.get(this.url,{headers:null});
  }

}
