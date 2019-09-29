import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtResponse} from '../model/auth/jwt-response';
import {Observable} from 'rxjs';
import {Credentials} from '../model/auth/credentials';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = 'http://localhost:8080';
  loginUrl = this.baseUrl + '/auth/login';
  registerUrl = this.baseUrl + '/auth/register';

  constructor(private httpClient: HttpClient) { }

  authenticate(credentials: Credentials): Observable<JwtResponse> {
    console.log(credentials);
    return this.httpClient.post<JwtResponse>(this.loginUrl, credentials);
  }

  register(user: User): Observable<string> {
    return this.httpClient.post<string>(this.registerUrl, user);
  }
}
