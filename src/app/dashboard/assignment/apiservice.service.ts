import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { endpoints } from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  url: string = endpoints.getAllAssignmentUrl;

  req= {
    "searchWord": "",
    "pageNumber": 1,
    "pageSize": 20

};
params = new HttpParams()
  .set('assignmentID', '2');


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.post(this.url,this.req,{headers:null});
  }


}
