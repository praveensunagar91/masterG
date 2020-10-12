import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';
import { Assignment } from './assignment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
  providers:[ToastrService]

})
export class AssignmentComponent implements OnInit {

  arr:Assignment[]=[];
  arrTwo:Assignment[]=[];
  err:string;
  config: any;
  collection:Assignment[]=[];
 public isLoading=false;
 searchstr:string;

  constructor(private data:ApiserviceService,private toastr: ToastrService,private router:Router) {
    this.config = {
      itemsPerPage: 15,
      currentPage: 1,
      totalItems: this.collection.length
    };
   }

  ngOnInit() {
    this.isLoading=true;
    this.data.getData().subscribe(
      (data:Assignment[])=>{

        this.isLoading=false;
        this.arr=data['data'];
        this.arrTwo=this.arr['assignmentDetails'];

        console.log(this.arrTwo);

      }, error=> {

        this.toastr.error('Internal Server Error','masterG');
}

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
