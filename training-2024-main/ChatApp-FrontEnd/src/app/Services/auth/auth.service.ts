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
}
