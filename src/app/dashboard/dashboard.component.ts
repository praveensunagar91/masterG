import { Component, OnInit } from '@angular/core';
import { DashboarddataService } from './dashboarddata.service';
import { FacultyProfile } from "./faculty";
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assignment } from './assignment/assignment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[ToastrService]
})
export class DashboardComponent implements OnInit {
arr:FacultyProfile[]=[];
arrAssignment:Assignment[]=[];
assignData:Assignment[]=[];
dashdata:any;
errmsg:string;
isLoading=false;
  constructor(private data:DashboarddataService,private router:Router,private activated:ActivatedRoute,private toastr:ToastrService) {
    this.dashdata=this.activated.snapshot.data['dashboarddata'];
   }

  ngOnInit() {
   this.getFacultyData();
   this.assignmentData();
  }
  getFacultyData(){
    this.isLoading=true;
    // this.arr.push(this.dashdata.Tasks);
    // this.errmsg=this.dashdata.errormsg;
    this.data.getFaculty().subscribe(

      (data:any)=>{
        this.isLoading=false;
        this.arr.push(data['data']);
      },error=>{
        this.toastr.error('Internal Server Error','MasterG');
      }
    );

  }
  assignmentData(){

    this.data.getAssignment().subscribe(
      (data:Assignment[])=>{

        this.arrAssignment=data['data'];
        this.assignData=this.arrAssignment['assignmentDetails'];
        console.log(this.assignData);
      }
    );
  }

  onMove(item:FacultyProfile){
     this.router.navigate(['/dashboard/faculty',item.facultyID]);
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
