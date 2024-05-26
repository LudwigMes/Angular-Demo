import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  standalone:true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule,CommonModule  ]
})
export class LoginComponent {


  isSignDivVisiable: boolean  = true;

  signUpObj: SignUpModel  = new SignUpModel();
  loginObj: LoginModel  = new LoginModel();

  constructor(private router: Router){}
  

  onRegister() {
    var users = [];
    users.push(this.signUpObj);
    //console.log(JSON.stringify(users));
    localStorage.setItem('angularUser', JSON.stringify(this.signUpObj));
    const localUser = localStorage.getItem('angularUser');
    console.log(localUser);
  }
  onLogin() {

    this.router.navigateByUrl('/table');
  }


}

export class SignUpModel  {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}
