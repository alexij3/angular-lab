import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Online Courses';

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  logout() {
    this.appComponent.logout();
  }

  isLoggedIn(): boolean {
    return this.appComponent.isLoggedIn;
  }
}
