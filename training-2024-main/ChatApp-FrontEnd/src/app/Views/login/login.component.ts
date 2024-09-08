import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import { LoaderService } from '../../Services/loader/loader.service';
import { SharedModule } from '../../Modules/shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [SharedModule, HttpClientModule, FormsModule]
})
export class LoginComponent {

  loginObj: Login;

  constructor(private router: Router,private authService: AuthService,private loaderService: LoaderService,
    private http: HttpClient)
  {
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post('#', this.loginObj).subscribe((res:any)=>{
      if(res.result) {
        alert("Login successful")
      }
      else{
        alert(res.message)
      }
    })}
  }

  export class Login {
    email: string;
    password: string;
    constructor() {
      this.email = "";
      this.password = ""
  }}
