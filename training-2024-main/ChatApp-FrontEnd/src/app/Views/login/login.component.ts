import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import { LoaderService } from '../../Services/loader/loader.service';
import { SharedModule } from '../../Modules/shared/shared.module';
import { jwtDecode } from 'jwt-decode';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [SharedModule, FormsModule, RouterModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}

  onLogin(): void {
    const credentials = {
      username: this.username,
      password: this.password,
      emailAddress: '',
    };
    this.loaderService.show();
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        alert('Login Successful');
        this.loaderService.hide();
        this.saveToken(response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        //  console.error('Login failed', error);
        this.loaderService.hide();
      },
    });
  }
  saveToken(response: any) {
    // Decode token to extract user info
    const decodedToken: any = jwtDecode(response.token);
    console.log(decodedToken);
    // Store extracted info in localStorage
    localStorage.setItem(
      'user',
      JSON.stringify({
        userId: decodedToken.userId,
        username: decodedToken.sub, // Assuming sub is the username
        email: decodedToken.email, // Assuming email is in the token
        firstName: decodedToken.firstName, // Adjust this as per your token claims
        lastName: decodedToken.lastName, // Adjust this as per your token claims
      })
    );
    localStorage.setItem('token', response.token);
  }
}
