import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CoursePart} from '../../model/course-part';
import {ActivatedRoute} from '@angular/router';
import {CoursePartService} from '../../service/course-part.service';
import {Location} from '@angular/common';
import {Course} from '../../model/course';
import {animate, style, transition, trigger} from '@angular/animations';

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

  constructor(private route: ActivatedRoute,
              private coursePartService: CoursePartService,
              private location: Location) { }

  ngOnInit() {
    this.coursePart.course = JSON.parse(this.route.params['value'].course) as Course;
  }

  public createCoursePart(form: NgForm): void {
    console.log(this.coursePart);
    if (form.valid) {
      this.coursePartService.createCoursePart(this.coursePart).subscribe(
        response => {
          window.alert('Course part has been successfully added!');
          this.routeBack();
        },
        err => window.alert('Something went wrong during course part creation.'));
    } else {
      window.alert('Form is invalid');
    }
  }

  routeBack() {
    this.location.back();
  }

}
