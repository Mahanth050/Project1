import { Component } from '@angular/core';
import { Router,Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';
  constructor(private router:Router){

  }
  Loginclick(){
     this.router.navigate(['Login']);
  }
  Dashbordclick(){
    this.router.navigate(['dashbord']);
  }
}
