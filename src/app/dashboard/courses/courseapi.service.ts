import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { endpoints } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseapiService {
url:string=endpoints.getOneCourse;

params=new HttpParams().set('facultyentityID','2');

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.url,{headers:null,params:this.params});
  }
}
