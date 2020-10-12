import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { endpoints } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MaindataService {
urlLogin:string=endpoints.login;
urlForget:string=endpoints.forgetPassword;
authToken:string;
refreshToken:string;
  constructor(private http:HttpClient) { }

  login(email:string,passowrd:string){
  return  this.http.post(this.urlLogin,{email:email,password:passowrd},{headers:null});

  }
 forgetData(email:string){
   return this.http.post(this.urlForget,{email:email},{headers:null});
 }
  
  getAuth(){
    return localStorage.getItem('token');
  }
  getRefresh(){
    return localStorage.getItem('refresh');
  }
  get isLoggedin():boolean{
    return this.getAuth() !== null,
     this.getRefresh() !== null;
  }

}
