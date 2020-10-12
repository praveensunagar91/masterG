import { Component, OnInit } from '@angular/core';
import { CourseapiService } from './courseapi.service';
import { CourseDetails } from './courseDetails';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers:[ToastrService]

})
export class CoursesComponent implements OnInit {
 arr:CourseDetails[]=[];
 arrTwo:CourseDetails[]=[];
  config: any;
  collection:CourseDetails[]=[];
 public isLoading=false;
 searchstr:string;

  constructor(private data:CourseapiService,private toastr:ToastrService,private router:Router) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.length
    };
   }

  ngOnInit(): void {
     this.isLoading=true;
    this.data.getData().subscribe(
      (data:CourseDetails[])=>{
        this.isLoading=false;
        this.arr=data['data'];

         this.arrTwo=this.arr['couseDetails'];
         console.log(this.arrTwo);
      },error=>{this.toastr.error('Internal Server Error','MasterG');}
    );
  }

  pageChanged(event){
    this.config.currentPage = event;
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
