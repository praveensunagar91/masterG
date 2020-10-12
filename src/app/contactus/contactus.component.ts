import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactdataService } from './contactdata.service';
import { Contactus } from './contact';
import { ToastrService } from 'ngx-toastr';
import { MaindataService } from '../main/maindata.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers:[ToastrService]
})
export class ContactusComponent implements OnInit {
arr:Contactus[]=[];
contact:Contactus[]=[];
  constructor(private router:Router,private data:ContactdataService,private toastr:ToastrService,private login:MaindataService) { }

  ngOnInit() {
    this.data.contact().subscribe(
      (data:any)=>{
        this.arr=data['data'];
        this.contact=this.arr['contactus'];
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
