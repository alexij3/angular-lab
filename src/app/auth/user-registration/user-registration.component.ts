import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {User} from '../../model/user';
import Swal, {SweetAlertType} from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: User = new User(null, '', '', '', null);
  errorList: string[];

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  public register(form: NgForm): void {
    this.errorList = [];
    if (form.valid) {
      this.userService.register(this.user).subscribe(response => {
        this.showModal('success', 'You have been successfully registered!');
        setTimeout(() => {
          this.router.navigateByUrl('/');
        },
        3000);
      }, err => {
        if (err.error.errors) {
          err.error.errors.forEach(error => {
            this.errorList.push(error.defaultMessage);
          });
        } else {
          this.errorList.push(err.error.message);
        }
        this.showModal('error', '<b>Could not register. Reasons: </b><br>' + this.buildErrorListMessage(this.errorList));
      });
    }
  }

  private showModal(type: SweetAlertType, text: string): void {
      Swal.fire({
        type: type,
        html: text
      });
  }

  private buildErrorListMessage(errorList: string[]) {
    if (errorList.length > 1) {
      let message = '';
      message = '<ul>';
      errorList.forEach(error => {
        message = message.concat('<li class="error">' + error + '</li>');
      });
      message = message + '</ul>';
      return message;
    } else {
      return '<span style="color: #be090a">' + errorList[0] + '</span>';
    }
  }

}
