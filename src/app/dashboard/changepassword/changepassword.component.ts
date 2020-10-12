import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, AbstractControl, Validators } from '@angular/forms';
import { ChangedataService } from './changedata.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
  providers:[ToastrService]
})
export class ChangepasswordComponent implements OnInit {

  changePassword:FormGroup;

  constructor(private router:Router,private fb:FormBuilder,private data:ChangedataService,private toastr:ToastrService) { }

  ngOnInit(): void {
this.changePassword=this.fb.group({
  oldPassword:new FormControl(null,[Validators.required]),
  passwordGroup:new FormGroup({
    newPassword:new FormControl(null,[Validators.required]),
    confirmPassword:new FormControl(null,[Validators.required])
  },this.matchPassword.bind(this)
  )
});

  }

  onSubmit(){
    const oldPassword=this.changePassword.get('oldPassword').value;
    const newPassword=this.changePassword.get('passwordGroup').get('newPassword').value;
    const confirmPassword=this.changePassword.get('passwordGroup').get('confirmPassword').value;
    console.log(oldPassword,newPassword,confirmPassword);
  this.data.changePassword(oldPassword,newPassword,confirmPassword).subscribe(
    (data:any)=>{
      this.changePassword.reset();
      this.router.navigate(['/']);
      this.toastr.success('Password Updated Successfully','MasterG');
      console.log(data);

    },error=>{
      if(oldPassword==null && newPassword==null && confirmPassword==null){
        this.toastr.error('Please Enter All the Fields','MasterG');
      }
      else{
      this.toastr.error('Current and New Password Must be Different','MasterG');
      }
    }
  );
  }

  matchPassword(x: AbstractControl): { [y: string]: boolean } {
    let password = x.get("newPassword").value;
    let cnfmpassword = x.get("confirmPassword").value;
    if (password != cnfmpassword) {
      return { passwordNotMatched: true };
    }
    return null;
  }

  onLogout(){
    let auth = localStorage.removeItem('token');
    let refresh= localStorage.removeItem('refresh');
    if(auth==null && refresh==null)
   {
      this.router.navigate(['/']);
   }
   }
}
