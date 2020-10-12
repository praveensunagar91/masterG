import { Injectable, Inject, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { endpoints } from "../../../environments/environment";




@Injectable({
  providedIn: 'root'


})
export class AssigndataService {

  url:string=endpoints.getEntities;
  urlCenters=endpoints.getCenters;
  urlFaculty:string=endpoints.getFaculties;
  urlAddAssignment:string=endpoints.addAssignment;



  constructor(private http:HttpClient) {

}
  //  params=new HttpParams().set('entityID',this.recieved);

getdata(){
    return this.http.get(this.url,{headers:null});
}
getCenters(){
    return this.http.get(this.urlCenters,{headers:null});
}
getFaculty(id:any){
     return this.http.get(this.urlFaculty+'entityID='+id,{headers:null});

}
addAssignmnet(assignment){
    let body=JSON.stringify(assignment);
    return this.http.post(this.urlAddAssignment,body,{headers:null});
}
}
