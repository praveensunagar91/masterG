import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class FaqdataService {
url:string=endpoints.faq;
  constructor(private http:HttpClient) { }

  faq(){
    return this.http.get(this.url,{headers:null});
  }
}
