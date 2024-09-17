import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

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
