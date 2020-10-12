import { Component, OnInit } from '@angular/core';
import { PrivacydataService } from './privacydata.service';
import { Privacypolicy } from './privacyPolicy';
import { ToastrService } from 'ngx-toastr';
import { MaindataService } from '../main/maindata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css'],
  providers:[ToastrService]
})
export class PrivacypolicyComponent implements OnInit {
arr:Privacypolicy[]=[];
privacy:Privacypolicy[]=[];
isLoading=false;
  constructor(private data:PrivacydataService,private toastr:ToastrService,private login:MaindataService,private router:Router) { }

  ngOnInit() {
    this.getPrivacy();
  }

  getPrivacy(){
    this.isLoading=true;
    this.data.priavcy().subscribe(
      (data:Privacypolicy[])=>{
    this.isLoading=false;
        this.arr=data['data'];
        this.privacy=this.arr['privacypolicy'];
        console.log(this.privacy);
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
