import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import $ from 'jquery';

@Component({
  selector: 'app-coursemaint',
  templateUrl: './coursemaint.component.html',
  styleUrls: ['./coursemaint.component.css']
})
export class CoursemaintComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    console.log($('#course-description'));
  }

  public toggleShowCreateCourse(): void {
    console.log($('#course-description'));
  }

}
