import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';
import { MaindataService } from "./main/maindata.service";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private data:MaindataService,private router:Router,private toastr:ToastrService) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

    return this.isUserLoggedIn(state.url);
}
canLoad(route:Route){
  return this.isUserLoggedIn(route.path);
}
isUserLoggedIn(url:string):boolean{

  if(this.data.isLoggedin){
    return true;
  }
  // this._userdata.redirectURL=url;
  // alert("login first");
  this.toastr.warning('Please Enter Login Credentials','MasterG');
  this.router.navigate(['/']);
  return false;
}
}
