import { Component, OnInit } from '@angular/core';
import { Entity } from './entity';
import { AssigndataService } from './assigndata.service';
import { Center } from './centers';
import { Faculty } from './faculty';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as $ from "jquery";
import { Router } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-addasignment',
  templateUrl: './addasignment.component.html',
  styleUrls: ['./addasignment.component.css'],
  providers:[ToastrService]

})
export class AddasignmentComponent implements OnInit {

arr:Entity[]=[];
centerArr:Center[]=[];
facultyArr:Faculty[]=[];
 public selected:any;
selectedCenter:any;
selectedFaculty:any;
selectedBatch:any;
selectStatus:any;
assignment:FormGroup;
file=null;
fileInput:string;
imageError:string;


  constructor(private data:AssigndataService,private fb:FormBuilder,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
    this.assignment=this.fb.group({
      entityID : new FormControl(null,[Validators.required]),
      centerId : new FormControl(null,[Validators.required]),
      courseId : new FormControl(null,[Validators.required]),
      batchId  : new FormControl(null,[Validators.required]),
      assignmentName : new FormControl(null,[Validators.required]),
      assignmentDescription : new FormControl(null,[Validators.required]),
      image  :[Validators.required],


      assignmentStatus : new FormControl(null,[Validators.required])
    });
    this.getEntity();
    this.getCenters();
    this.getFaculty();
  }




  getEntity(){
    this.data.getdata().subscribe(
      (data:Entity[])=>{
        this.arr=data['data'];
        console.log(this.arr);
      }
    );
  }
  getCenters(){
     this.data.getCenters().subscribe(
       (data:Center[])=>{
         this.centerArr=data['data'];
         console.log(this.centerArr);
       }
     );
  }
  getFaculty(){

  }

  click(items){
      console.log(items);
      this.data.getFaculty(items).subscribe(
        (data:Faculty[])=>{
          this.facultyArr=data['data'];
          console.log(this.facultyArr);
        }
      );


  }
  onCenter(){
    console.log(this.selectedCenter);
  }

onFaculty(){
  console.log(this.selectedFaculty);

}
onBatch(){
  console.log(this.selectedBatch);

}
onStatus(){
  console.log(this.selectStatus);
}

onUpload(event){
  this.imageError = null;
    if (event.target.files && event.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['application/msword', 'application/pdf'];
        const max_height = 15200;
        const max_width = 25600;

        // if (event.target.files[0].size > max_size) {
        //     this.imageError =
        //         'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        //     return false;
        // }

        if (!_.includes(allowed_types, event.target.files[0].type)) {
            this.imageError = 'Only Word and Pdf Files are Allowed';
            this.toastr.error(this.imageError,'MasterG');

            return false;
        }
      }
  if(event.target.files.length>0){
     this.file=event.target.files[0].name;
     this.fileInput=this.file.name;
    console.log(this.file);
this.assignment.get('image').setValue(this.file)
const morris=this.assignment.get('image').value;
console.log(morris);
}
}

  onAdd(data){

const entity=this.assignment.get('entityID').value;
const center=this.assignment.get('centerId').value;
const course=this.assignment.get('courseId').value;
const batch=this.assignment.get('batchId').value;
const aName=this.assignment.get('assignmentName').value;
const aDesc=this.assignment.get('assignmentDescription').value;
const img=this.assignment.get('image').value;
const aStatus=this.assignment.get('assignmentStatus').value;

    console.log(data);
this.data.addAssignmnet(data).subscribe(

  (data:any)=>{
    console.log(data);
    this.assignment.reset();
    this.router.navigate(['/dashboard/assignments']);
    this.toastr.success('record added successfully','MasterG');

  },error=>{
    if(entity==null && center==null && course==null && batch==null && aName==null && aDesc==null && aStatus==null ){
      this.toastr.error('Please Enter All The Fields','MasterG');
    }
    else{
    this.toastr.error('Internal Server Error','MasterG');
    }
  }
);
   $(document).ready(function(){

   $('blah-b').hide();
   });
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

