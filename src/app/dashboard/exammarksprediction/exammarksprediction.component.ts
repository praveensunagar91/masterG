import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exammarksprediction',
  templateUrl: './exammarksprediction.component.html',
  styleUrls: ['./exammarksprediction.component.css']
})
export class ExammarkspredictionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
