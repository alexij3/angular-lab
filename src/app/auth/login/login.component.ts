import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../../service/authentication.service';
import {Credentials} from '../../model/auth/credentials';
import {TokenStorageService} from '../../service/token-storage.service';
import {AppComponent} from '../../app.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials = new Credentials('', '');
  errors: string[];
  hasErrors: boolean;

  constructor(private authService: AuthenticationService,
              private tokenStorage: TokenStorageService,
              private appComponent: AppComponent,
              private router: Router) { }

  ngOnInit() {
  }

  public login(form: NgForm) {
    this.errors = [];
    this.authService.authenticate(this.credentials).subscribe(data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveAuthorities(data.authorities);

      this.appComponent.isLoggedIn = true;
      this.appComponent.userRoles = this.tokenStorage.getAuthorities();

      this.hasErrors = false;
      this.router.navigateByUrl('/');
    }, err => {
      if (err.error.errors) {
        err.error.errors.forEach(error => {
          this.errors.push(error.defaultMessage);
        });
      } else {
        this.errors.push(err.error.message);
      }
      this.hasErrors = true;
    });
  }

}
