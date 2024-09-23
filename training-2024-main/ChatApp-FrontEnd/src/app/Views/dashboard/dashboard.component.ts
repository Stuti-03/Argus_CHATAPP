import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../SharedComponents/Model/user.model';
import { AuthService } from '../../Services/auth/auth.service';
import { LoaderService } from '../../Services/loader/loader.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup/signup.component';
import { Message } from '../../SharedComponents/Model/message.model';
import { MessageService } from '../../Services/message/message.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, LoginComponent, SignupComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  users:User[] = [];
  constructor(private router: Router, private authService: AuthService, private loaderService: LoaderService, private messageService: MessageService) {
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

    messages: Message[] = [];
    newMessage: string = '';
    sendMessage() {
      const message: Message = {
        MessageId: 0,
        content: this.newMessage,
        senderId: 0,
        timestamp: new Date(),
        receiverId: 0,
        seen: true,
      };

      this.messageService.sendMessage(message).subscribe(() => {
          // this.loadMessages(1); // Reload messages after sending
          this.newMessage = ''; // Clear the input
      });
  }
  }
