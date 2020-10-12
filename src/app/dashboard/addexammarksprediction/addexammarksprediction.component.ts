import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addexammarksprediction',
  templateUrl: './addexammarksprediction.component.html',
  styleUrls: ['./addexammarksprediction.component.css']
})
export class AddexammarkspredictionComponent implements OnInit {

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
