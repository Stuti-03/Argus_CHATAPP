import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import { LoaderService } from '../../Services/loader/loader.service';
import { SharedModule } from '../../Modules/shared/shared.module';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router,private authService: AuthService,private loaderService: LoaderService) 
  { 

  }

  onLogin(): void {
    const credentials = { username: this.username, password: this.password,emailAddress:"" };
    this.loaderService.show();
    this.authService.login(credentials).subscribe({
      next: response => {
        console.log('Login successful', response);
        this.loaderService.hide();
      },
      error: error => {
      //  console.error('Login failed', error);
        this.loaderService.hide();
      }
    });
  }
  
}
