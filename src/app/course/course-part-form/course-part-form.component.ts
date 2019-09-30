import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CoursePart} from '../../model/course-part';
import {ActivatedRoute} from '@angular/router';
import {CoursePartService} from '../../service/course-part.service';
import {Location} from '@angular/common';
import {Course} from '../../model/course';
import {animate, style, transition, trigger} from '@angular/animations';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-part-form',
  templateUrl: './course-part-form.component.html',
  styleUrls: ['./course-part-form.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class CoursePartFormComponent implements OnInit {

  coursePart: CoursePart = new CoursePart(null, '', '');
  editMode: boolean;

  constructor(private route: ActivatedRoute,
              private coursePartService: CoursePartService,
              private location: Location) { }

  ngOnInit() {
    this.editMode = this.route.params['value'].editMode;
    if (this.editMode) {
      this.coursePart.course = JSON.parse(this.route.params['value'].course) as Course;
      this.coursePart = JSON.parse(this.route.params['value'].coursePart) as CoursePart;
    } else {
      this.coursePart = new CoursePart(null, '', '');
      this.coursePart.course = JSON.parse(this.route.params['value'].course) as Course;
    }
    console.log('course part form course part:');
    console.log(this.coursePart);
  }

  public createCoursePart(form: NgForm): void {
    console.log(this.coursePart);
    if (form.valid) {
      if (!this.editMode) {
        this.coursePartService.createCoursePart(this.coursePart).subscribe(
            response => {
              Swal.fire({
                type: 'success',
                text: 'Course part has been successfully created!'
              });
              this.routeBack();
            },
            err => {
              Swal.fire({
                type: 'error',
                text: 'Something went wrong during course part creation.'
              });
            });
      } else {
        this.coursePartService.updateCoursePart(this.coursePart).subscribe(
            response => {
              Swal.fire({
                type: 'success',
                text: 'Course part has been successfully updated!'
              });
              this.routeBack();
            },
            err => {
              Swal.fire({
                type: 'error',
                text: 'Something went wrong during course part update.'
              });
            });
      }
    } else {
      Swal.fire({
        type: 'error',
        text: 'The data for the course part is invalid.'
      });
    }
  }

  routeBack() {
    this.location.back();
  }

}
