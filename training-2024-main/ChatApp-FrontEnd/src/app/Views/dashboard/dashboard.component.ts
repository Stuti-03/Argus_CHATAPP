import { Message } from './../../SharedComponents/Model/message.model';
import { User } from './../../SharedComponents/Model/user.model';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth/auth.service';
import { LoaderService } from '../../Services/loader/loader.service';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup/signup.component';
import { MessageService } from '../../Services/message/message.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, LoginComponent, SignupComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  chatMessages!: Message[];
  messageText: string = '';
  public user: any;
  userId!: number;

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  constructor(
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService,
    private messageService: MessageService
  ) {this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userId = this.user.userId;}
  ngOnInit() {
    this.getUsers();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  getUsers(): void {
    this.authService.getUsers(this.userId).subscribe({
      next: (response: any) => {
        console.log(response);
        this.users = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  selectUser(users: User): void {
    this.selectedUser = users;
    console.log(this.selectedUser);
    this.fetchAllMessages();
  }

  fetchAllMessages() {
    if (!this.selectedUser) return;
    console.log(this.selectedUser);
    var messages = this.messageService.getMessages(this.selectedUser?.id).subscribe({
      next: (response) => {
        console.log(response);
        this.chatMessages = response;
      },
      error: (error) => {
        console.log('Unable to fetch message', error);
      },
    });
  }
  onSendMessage(inputEl: HTMLInputElement): void {
    if (!this.selectedUser || inputEl.value.trim() === '') {
      return;
    }
    this.messageText = inputEl.value;
    console.log(this.messageText);
    console.log(this.selectedUser.id);
    this.messageService.sendMessage(this.messageText, this.selectedUser.id).subscribe({
      next: (response) => {
        // console.log('Message sent successfully', response);
        this.chatMessages.push();
        this.fetchAllMessages();
        inputEl.value = '';
        this.messageText = '';
      },
      error: (error) => {
        console.error('Failed to send message', error);
      },
    });
  }

  // Helper function to scroll to the bottom of the chat
  private scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll to bottom failed', err);
    }
  }

  // onViewMessages() {
  //   const messageIdsToMarkAsRead = this.chatMessages
  //     .filter(message => !message.seen)
  //     .map(message => message.messageId);

  //   if (messageIdsToMarkAsRead.length > 0) {
  //     this.messageService.markAsRead(this.userId, messageIdsToMarkAsRead).subscribe();

  //     // Update local state
  //     this.chatMessages.forEach(message => {
  //       if (messageIdsToMarkAsRead.includes(message.messageId)) {
  //         message.seen = true;
  //       }
  //     });
  //   }
  // }

}
