import { Component, OnInit } from '@angular/core';
import { TermsdataService } from './termsdata.service';
import { Termsconditions } from './termsCondiions';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MaindataService } from '../main/maindata.service';


@Component({
  selector: 'app-termsconditions',
  templateUrl: './termsconditions.component.html',
  styleUrls: ['./termsconditions.component.css'],
  providers:[ToastrService]
})
export class TermsconditionsComponent implements OnInit {

  arr:Termsconditions[]=[];
  terms:Termsconditions[]=[];
  isLoading=false;

  constructor(private data:TermsdataService,private toastr:ToastrService,private router:Router,private login:MaindataService) { }

  ngOnInit() {
    this.getTermsConditions();
  }

  getTermsConditions(){
      this.isLoading=true;
      this.data.termsConditions().subscribe(
        (data:Termsconditions[])=>{
          this.isLoading=false;
          this.arr=data['data'];
          this.terms=this.arr['termsconditions'];
          console.log(this.terms);
        },error=>{
          this.toastr.error('Internal Server Error','MasterG');
        }
      );
  }
  onLogout(){
    let auth = localStorage.removeItem('token');
    let refresh= localStorage.removeItem('refresh');
    if(auth==null && refresh==null)
   {
      this.router.navigate(['/']);
   }
   }
   isLogged(){
    return this.login.isLoggedin;
  }
}
