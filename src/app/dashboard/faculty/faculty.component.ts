import { Component, OnInit } from '@angular/core';
import { FacultydataService } from './facultydata.service';
import { ActivatedRoute } from '@angular/router';
import { FacultyProfile } from '../faculty';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Country } from './country';
import { Subjects } from './subjects';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import * as _ from 'lodash';





@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
  providers:[ToastrService]
})
export class FacultyComponent implements OnInit {

  facultyId:any;
  updated:any;
  faculty:FormGroup;
  arr:Country[]=[];
  CountryArr:Country[]=[];
  subjectsArr:Subjects[]=[];
  subjectsNewArr:Subjects[]=[];
  imageError:string;
  constructor(private data:FacultydataService,private activated:ActivatedRoute,private fb:FormBuilder,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
  this.facultyId=this.activated.snapshot.params['facultyID'];
  this.data.getFacultyData().subscribe(
    (data:FacultyProfile[])=>{
      this.updated=data['data'];
      console.log(this.updated);

     this.faculty.patchValue({
      facultyFullName:this.updated.facultyFullName,
      facultyMobile:this.updated.facultyMobile,
      facultyEmail:this.updated.facultyEmail,
      facultyGender:this.updated.facultyGender,
      facultyBirthDate:this.updated.facultyBirthDate,
      facultyJoiningDate:this.updated.facultyJoiningDate,
      countryID:this.updated.countryID,
      stateID:this.updated.stateID,
      cityID:this.updated.cityID,
      facultyPincode:this.updated.facultyPincode,
      facultyAddress:this.updated.facultyAddress,
      image:this.updated.facultyProfilePicture

     });
     console.log(this.faculty.get('image').value);

    }
  );
   this.faculty=this.fb.group({
    facultyFullName:new FormControl(null,[Validators.required]),
    facultyMobile :new FormControl(null,[Validators.required]),
    facultyEmail:new FormControl(null,[Validators.required]),
    facultyGender:new FormControl(null,[Validators.required]),
    facultyBirthDate:new FormControl(null,[Validators.required]),
    facultyJoiningDate:new FormControl(null,[Validators.required]),
    countryID:new FormControl(null,[Validators.required]),
    stateID:new FormControl(null,[Validators.required]),
    cityID:new FormControl(null,[Validators.required]),
    facultyPincode:new FormControl(null,[Validators.required]),
    facultyAddress:new FormControl(null,[Validators.required]),
    image:['',Validators.required]

   });
    this.getCountry();
    this.getSubjects();

  }

  getCountry(){
    this.data.getCountry().subscribe(
      (data:Country[])=>{
        this.arr=data['data'];
        this.CountryArr=this.arr['country'];

      }
    );
  }
  onSelectCountry(){

  }
  onSelectGender(){

  }
  onSelectState(){

  }
  onSelectCity(){

  }
  onUploadPic(event){
    this.imageError = null;
    if (event.target.files && event.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;

        if (event.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }

        if (!_.includes(allowed_types, event.target.files[0].type)) {
            this.imageError = 'Only Images are allowed';
            this.toastr.error(this.imageError,'MasterG');

            return false;
        }
      }
    const file=event.target.files[0].name;
    this.faculty.get('image').setValue(file);
    console.log(file);
    console.log(this.faculty.get('image').value);
  }
  getSubjects(){
    this.data.getSubjects().subscribe(
      (data:Subjects[])=>{
         this.subjectsArr=data['data'];
         this.subjectsNewArr=this.subjectsArr['subjects'];
         console.log(this.subjectsNewArr);
      }
    );
  }
  onUpdateProfile(data){





     this.data.updateFaculty(data).subscribe(
       (data:any)=>{
         console.log(data);
         this.router.navigate(['/dashboard']);
         this.toastr.success('Record Updated Succssfully','MasterG');
       },error=>{
              this.toastr.error("Internal Server Error",'MasterG');

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
   onDashboard(){

  }
}
