import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  public login(form: NgForm): void {
      const headers = new HttpHeaders((this.username && this.password) ? {
          authorization : 'Basic ' + btoa(this.username + ':' + this.password)
      } : {});

    this.httpClient.get('http://localhost:8080/user', {headers: headers}).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
