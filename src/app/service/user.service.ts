import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public register(user: User) {
    console.log(user);
    return this.httpClient.post<User>(this.baseUrl + '/auth/register', user);
  }

}
