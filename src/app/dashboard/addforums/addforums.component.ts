import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addforums',
  templateUrl: './addforums.component.html',
  styleUrls: ['./addforums.component.css']
})
export class AddforumsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
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
