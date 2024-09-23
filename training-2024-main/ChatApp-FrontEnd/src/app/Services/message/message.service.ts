import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Message } from "../../SharedComponents/Model/message.model";
import { API_ENDPOINTS } from "../../Constants/app.constants";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messageUrl = API_ENDPOINTS.sendMessageUrl;

  constructor(private http: HttpClient) {}

  // getMessages(chatRoomId: number): Observable<Message[]> {
  //     return this.http.get<Message[]>(`${this.messageUrl}/${chatRoomId}`);
  // }

  sendMessage(message: Message): Observable<Message> {
      return this.http.post<Message>(this.messageUrl, message);
  }
}
