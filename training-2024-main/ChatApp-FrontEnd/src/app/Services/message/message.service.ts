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

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.getMessageUrl);
  }

  sendMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.sendMessageUrl, message);
  }
}
