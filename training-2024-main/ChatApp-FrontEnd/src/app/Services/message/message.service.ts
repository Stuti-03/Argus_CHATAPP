import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../../SharedComponents/Model/message.model';
import { API_ENDPOINTS } from '../../Constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // api to send messages
  private sendMessageUrl = API_ENDPOINTS.sendMessageUrl;

  // api to get messages
  private getMessageUrl = API_ENDPOINTS.getMessageUrl;

  constructor(private http: HttpClient) {}

  user = JSON.parse(localStorage.getItem('user') || '{}');
  userId = Number(this.user.userId);

  sendMessage(messageBody: string, receiverId: number): Observable<any> {
    const payload = {
      senderId: this.userId,
      receiverId: receiverId,
      content: messageBody,
      isRead: false
    };
    return this.http.post(this.sendMessageUrl, payload);
  }
  // api to get message list
  getMessages(receiverId: number): Observable<any> {
    console.log(receiverId);
    return this.http.get(
      `${this.getMessageUrl}?senderId=${this.userId}&receiverId=${receiverId}`
    );
  }
}
