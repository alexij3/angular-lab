import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CourseService} from './service/course.service';
import {TokenStorageService} from './service/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  router: string;
  public userRoles: string[] = [];
  public isLoggedIn: boolean;

  constructor(private _router: Router,
              private courseService: CourseService,
              private tokenStorage: TokenStorageService) {

    this.router = _router.url;
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.userRoles = this.tokenStorage.getAuthorities();
    }
  }

  logout() {
    this.tokenStorage.signOut();
    this._router.navigateByUrl('/');
    location.reload();
  }
}
