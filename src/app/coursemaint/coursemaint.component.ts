import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {NgForm} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-coursemaint',
  templateUrl: './coursemaint.component.html',
  styleUrls: ['./coursemaint.component.css']
})
export class CoursemaintComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  public toggleShowCreateCourse(): void {
    this.appComponent.toggleShowCreateCourse();
  }
}
