import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FacultydataService {

  url:string=endpoints.getFacultyProfile;
  urlCountry:string=endpoints.getCountry;
  urlSubjects:string=endpoints.getSubjects;
  urlUpdateFaculty:string=endpoints.updateFaculty;

  req={
    "searchWord": "",
    "countryName": "",
    "pageSize":10
}

subjects={
  "loginuserID":"2",
   "courseID":"2"
}
  constructor(private http:HttpClient) { }

  getFacultyData(){
    return this.http.get(this.url,{headers:null});
  }
  getCountry(){
    return this.http.post(this.urlCountry,this.req,{headers:null});
  }
  getSubjects(){
      return this.http.post(this.urlSubjects,this.subjects,{headers:null});
  }
  updateFaculty(newfaculty){
   let body=JSON.stringify(newfaculty);
  return this.http.patch(this.urlUpdateFaculty,body,{headers:null});
  }
}
