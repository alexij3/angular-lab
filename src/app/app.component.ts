import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CourseService} from './service/course.service';
import {SanitizeHtmlPipe} from './sanitize-html.pipe';
import {animate, style, transition, trigger} from '@angular/animations';
import {Course} from "./model/course";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent implements OnInit {
  title = 'Online Courses';
  router: string;

  recentCourses: any = [];

  selectedCourse: Course;

  public showCreateCourse: boolean;
  public showCourseDetails: boolean;
  public showCreateCoursePart: boolean;
  public showCoursePart: boolean;
  public showEditCourse: boolean;

  constructor(private _router: Router,
              private courseService: CourseService) {

    this.router = _router.url;
  }

  ngOnInit() {
    this.showCreateCourse = false;
    this.showCourseDetails = false;
    this.showEditCourse = false;
    this.syncRecentCourses();
  }

  public toggleShowCreateCourse(): void {
    this.showCreateCourse = !this.showCreateCourse;
  }

  public toggleShowCourseDetails(course: Course): void {
    this.selectedCourse = course;
    this.showCourseDetails = !this.showCourseDetails;
    this.showCreateCoursePart = false;
    this.showCreateCourse = false;
  }

  public syncRecentCourses(): void {
    this.courseService.getRecentCourses().subscribe(data => {
      this.recentCourses = data;
      console.log(data);
    });
  }

  public toggleShowCreateCoursePart(): void {
    this.showCreateCoursePart = !this.showCreateCoursePart;
  }

  public showRecentCourses(): boolean {
    return !this.showCreateCourse && !this.showCreateCoursePart && !this.showCourseDetails && !this.showCoursePart && !this.showEditCourse;
  }

  public toggleShowCoursePart() {
      this.showCoursePart = !this.showCoursePart;
      console.log(this.showCoursePart);
  }

  public toggleShowEditCourse(course: Course) {
      this.selectedCourse = course;
      this.showEditCourse = !this.showEditCourse;
  }

  public deleteCourse(course: Course) {
      if (confirm('Do you really want to delete the course?')) {
          this.courseService.delete(course.id).subscribe(response => {
              window.alert('Course has been successfully deleted.');
              this.syncRecentCourses();
          },
          error => {
              window.alert('Could not delete the course.');
          });
      }
  }
}
