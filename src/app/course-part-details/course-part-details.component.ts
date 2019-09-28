import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {CoursedetailsComponent} from '../coursedetails/coursedetails.component';
import {Coursepart} from '../model/coursepart';
import {Location} from '@angular/common';

@Component({
  selector: 'app-course-part-details',
  templateUrl: './course-part-details.component.html',
  styleUrls: ['./course-part-details.component.css']
})
export class CoursePartDetailsComponent implements OnInit {

  coursePart: Coursepart;

  constructor(private appComponent: AppComponent,
              private courseDetailsComponent: CoursedetailsComponent,
              private location: Location) { }

  ngOnInit() {
    this.coursePart = this.courseDetailsComponent.selectedCoursePart;
  }

  routeBack() {
    this.location.back();
  }
}
