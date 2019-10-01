import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {CoursePart} from '../../model/course-part';
import {animate, style, transition, trigger} from '@angular/animations';
import Swal from "sweetalert2";
import {CoursePartService} from "../../service/course-part.service";

@Component({
  selector: 'app-course-part-details',
  templateUrl: './course-part-details.component.html',
  styleUrls: ['./course-part-details.component.css'],
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
export class CoursePartDetailsComponent implements OnInit {

  coursePart: CoursePart;

  constructor(private appComponent: AppComponent,
              private location: Location,
              private route: ActivatedRoute,
              private coursePartService: CoursePartService) { }

  ngOnInit() {
    this.coursePart = JSON.parse(this.route.params['value'].coursePart) as CoursePart;
  }

  routeBack() {
    this.location.back();
  }

  deleteCoursePart(course: any) {
    Swal.fire({
      type: 'warning',
      title: 'Are you sure that you want to delete the course part?',
      text: 'You wont be able to revert the changes',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        this.coursePartService.delete(course.id).subscribe(response => {
              Swal.fire({
                type: 'success',
                text: 'Course part has been successfully deleted.'
              });
              this.routeBack();
            },
            error => {
              Swal.fire({
                type: 'error',
                text: 'Could not delete the course part.'
              });
            });
      }
    });
  }

  hasRole(role: string): boolean {
    return this.appComponent.userRoles.indexOf(role) >= 0;
  }
}
