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
    });

  // conversations = [
  //   {name: "David", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false, },
  //   {name: "James", time:"8:21", latestMessage: "Good Morning!" ,  latestMessageRead: true},
  //   {name: "Andrew", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
  //   {name: "Richard", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
  //   {name: "Dyno", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
  //   {name: "Julie", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
  //   {name: "Tom", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
  //   {name: "Jerry", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
  //   {name: "Grey", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
  //   {name: "Jill", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
  //   {name: "Blue", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
  //   {name: "King", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
  //   {name: "Kong", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
  //   {name: "Rock", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},

  // ]

}}
