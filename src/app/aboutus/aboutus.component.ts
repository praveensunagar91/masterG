import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutdataService } from './aboutdata.service';
import { Aboutus } from './about';
import { ToastrService } from 'ngx-toastr';
import { MaindataService } from '../main/maindata.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  providers:[ToastrService]
})
export class AboutusComponent implements OnInit {
  arr:Aboutus[]=[];
  about:Aboutus[]=[];
  isLoading=false;

  constructor(private router:Router,private data:AboutdataService,private toastr:ToastrService,private login:MaindataService) { }

  ngOnInit() {
    this.getAboutData();
  }
  getAboutData(){
    this.isLoading=true;
    this.data.about().subscribe(
     (data:Aboutus[])=>{
       this.isLoading=false;
       this.arr=data['data'];
       this.about=this.arr['aboutus'];
       console.log(this.about);
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
