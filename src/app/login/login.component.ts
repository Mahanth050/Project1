import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){

  }
  username?:string ='';
  password?:string ='';
  login(data:any){
    if(data.valid){
      if(this.username=='Mahanth' && this.password=='123456'){
        console.log('Login Succesful');
        this.router.navigate(['dashbord']);
      }
      else{
        console.log('login unsuccesful');
        this.router.navigate(['Login']);
      }
    }
    else{
      console.log(data)
      alert('Enter complete details')
    }
  }

}
