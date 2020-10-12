import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MaindataService } from './maindata.service';
import { ToastrService } from 'ngx-toastr';
import { Login } from './login';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[ToastrService]
})
export class MainComponent implements OnInit {
  login:FormGroup;
  forgetform:FormGroup;
  tokens:any;
  isLoading=false;
  arr:Login;
  constructor(private router: Router,private fb:FormBuilder,private data:MaindataService,private toastr:ToastrService) { }

  ngOnInit() {
    this.login=this.fb.group({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required])
    });
    this.forgetform=this.fb.group({
      email:new FormControl(null)
    });
  }

  onLogin(){
    this.isLoading=true;
    const email=this.login.get('email').value;
    const password=this.login.get('password').value;
    this.data.login(email,password).subscribe(
      (data:any)=>{

        this.arr=data['data'];
        localStorage.setItem('token',this.arr.token);
        localStorage.setItem('refresh',this.arr.refreshToken);

        this.router.navigate(['/dashboard']);
      },error=>{
        if(email==null && password==null){
          this.toastr.error('Please Enter All The Fields','MasterG');
        }
        else
        {
        this.toastr.error('Invalid Credentials','MasterG');
        }
      }
    );

  }
  forget(){
    const emails=this.forgetform.get('email').value;
    this.data.forgetData(emails).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );
  }

}
