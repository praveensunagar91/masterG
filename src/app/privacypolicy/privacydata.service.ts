import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PrivacydataService {
url:string=endpoints.privacyPolicy;
  constructor(private http:HttpClient) { }

  priavcy(){
    return this.http.get(this.url,{headers:null});
  }
}
