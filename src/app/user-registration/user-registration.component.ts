import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../service/user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: User = new User(null, '', '', '', null);

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public register(form: NgForm): void {
    if (form.valid) {
      this.userService.register(this.user).subscribe(response => {
        alert('User has been successfully registered!');
      }, err => {
        alert('Something went wrong during user registration');
      });
    }
  }

}
