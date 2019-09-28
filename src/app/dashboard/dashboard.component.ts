import { Component, OnInit } from '@angular/core';
import {CourseService} from '../service/course.service';
import {Course} from '../model/course';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recentCourses: any = [];

  constructor(private courseService: CourseService) { }

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
