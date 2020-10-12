import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ChangedataService {

  url:string=endpoints.changePassword;
  constructor(private http:HttpClient) { }

 changePassword(oldPassword:string,newPassword:string,confirmPassword:string){
      return this.http.patch(this.url,{oldPassword:oldPassword,newPassword:newPassword,confirmPassword:confirmPassword},{headers:null});
 }

}
