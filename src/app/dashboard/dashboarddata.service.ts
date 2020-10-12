import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DashboarddataService {

  url:string=endpoints.getFacultyProfile;
  urlAssignments: string = endpoints.getAllAssignmentUrl;

  req= {
    "searchWord": "",
    "pageNumber": 1,
    "pageSize": 3

};
  constructor(private http:HttpClient) { }

  getFaculty(){
   return this.http.get(this.url,{headers:null});
  }

  getAssignment() {
    return this.http.post(this.urlAssignments,this.req,{headers:null});
  }
}
