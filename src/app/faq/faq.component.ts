import { Component, OnInit } from '@angular/core';
import { FaqdataService } from './faqdata.service';
import { Faq } from './faq';
import { ToastrService } from 'ngx-toastr';
import { MaindataService } from '../main/maindata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  providers:[ToastrService]
})
export class FaqComponent implements OnInit {
  arr:Faq[]=[];
  faq:Faq[]=[];
  isLoading=false;
  constructor(private data:FaqdataService,private toastr:ToastrService,private login:MaindataService,private router:Router) { }

  ngOnInit() {
    this.getFaq();
  }

  getFaq(){
    this.isLoading=true;
    this.data.faq().subscribe(
      (data:Faq[])=>{
        this.isLoading=false;
        this.arr=data['data'];
        this.faq=this.arr['faqs'];
        console.log(this.faq);
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
