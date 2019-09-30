import { Component, OnInit } from '@angular/core';
import {CourseService} from '../service/course.service';
import {Course} from '../model/course';
import {AppComponent} from '../app.component';
import {animate, style, transition, trigger} from '@angular/animations';
import {AuthenticationService} from '../service/authentication.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  recentCourses: any = [];

  constructor(private courseService: CourseService,
              private authService: AuthenticationService,
              private appComponent: AppComponent) { }

  ngOnInit() {
    this.syncRecentCourses();
  }

  public syncRecentCourses(): void {
    this.courseService.getRecentCourses().subscribe(data => {
      this.recentCourses = data;
      console.log(data);
    });
  }

  public deleteCourse(course: Course) {
      Swal.fire({
          type: 'warning',
          title: 'Are you sure that you want to delete the course?',
          text: 'You wont be able to revert the changes',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
      }).then((result) => {
          if (result.value) {
              this.courseService.delete(course.id).subscribe(response => {
                      Swal.fire({
                          type: 'success',
                          text: 'Course has been successfully deleted.'
                      });
                      this.syncRecentCourses();
                  },
                  error => {
                      Swal.fire({
                          type: 'error',
                          text: 'Could not delete the course.'
                      });
                  });
          }
      });
  }

  hasRole(role: string): boolean {
    return this.appComponent.userRoles.indexOf(role) >= 0;
  }
}
