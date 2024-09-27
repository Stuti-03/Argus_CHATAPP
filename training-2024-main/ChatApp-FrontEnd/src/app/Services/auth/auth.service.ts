import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../Constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = API_ENDPOINTS.loginUrl;

  constructor(private http: HttpClient)
  {

  }

  login(credentials: { username: string; password: string }): Observable<any>
  {
    return this.http.post(this.loginUrl, credentials);
  }

  // implementing SIGNUP method in AuthService
  private registerUrl = API_ENDPOINTS.registerUrl;
  register(credentials_signup: {}): Observable<any>
  {
    return this.http.post(this.registerUrl, credentials_signup);
  }

  // to get all users name in chatapp dashboard sidebar
  private getUsersUrl = API_ENDPOINTS.getUserUrl;
  getUsers(id : number): Observable<any>
  {
    return this.http.get(this.getUsersUrl+id)
  }
}
