import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../Services/auth/auth.service';
import { LoaderService } from '../../../Services/loader/loader.service';
import { FormsModule } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService
  ) { }

  onSignup(): void {
    console.log("Submitting form...");

    const credentials_signup = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      username: this.username,
      password: this.password,
    };
    console.log(credentials_signup);

    this.loaderService.show();

    this.authService.register(credentials_signup).subscribe({
      next: (response) => {
        this.loaderService.hide();
        alert('Account Created!');
        this.saveToken(response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.loaderService.hide();
        console.error('Signup failed', error);
      }
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
