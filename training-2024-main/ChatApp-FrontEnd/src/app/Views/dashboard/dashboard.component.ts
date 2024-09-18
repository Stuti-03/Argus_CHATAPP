import { CommonModule } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  firstname: any;
selectedconversation: any = null;
message = '';
selectconversation(user: any) {
  this.selectedconversation = user;
}
sendMessage() {
  if (this.message.trim()) {
    console.log(`Message to ${this.selectedconversation.name}: ${this.message}`);
    this.message = '';
  }
}
  conversations = [
    {name: "David", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false, },
    {name: "James", time:"8:21", latestMessage: "Good Morning!" ,  latestMessageRead: true},
    {name: "Andrew", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Richard", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
    {name: "Dyno", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Julie", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Tom", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
    {name: "Jerry", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Grey", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Jill", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
    {name: "Blue", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "King", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: false},
    {name: "Kong", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},
    {name: "Rock", time:"8:21", latestMessage: "Good Morning!" , latestMessageRead: true},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
