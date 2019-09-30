import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {decode} from 'punycode';
import {AppComponent} from '../app.component';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router,
              private tokenService: TokenStorageService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

    const hasRole = this.tokenService.getAuthorities().indexOf(expectedRole) >= 0;

    if (route.data.homeIfLoggedIn && this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/');
      return false;
    }

    if (!this.authService.isAuthenticated() || !hasRole) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

}
