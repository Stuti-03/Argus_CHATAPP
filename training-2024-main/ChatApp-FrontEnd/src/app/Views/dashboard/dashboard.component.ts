import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../SharedComponents/Model/user.model';
import { AuthService } from '../../Services/auth/auth.service';
import { LoaderService } from '../../Services/loader/loader.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  users:User[] = [];
  constructor(private router: Router, private authService: AuthService, private loaderService: LoaderService) {
  }
  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.authService.getUsers().subscribe({
      next: (response: any) => {
        console.log(response);
        this.users = response
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
    selectedUser: User | null = null;
    selectUser(users: User) : void{
      this.selectedUser = users;
    }
  }
