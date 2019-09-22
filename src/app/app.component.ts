import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CourseService} from './service/course.service';
import {SanitizeHtmlPipe} from './sanitize-html.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Online Courses';
  router: string;

  recentCourses: any = [];

  public showCreateCourse: boolean;

  constructor(private _router: Router,
              private courseService: CourseService) {

    this.router = _router.url;
  }

  ngOnInit() {
    this.showCreateCourse = false;
    this.courseService.getRecentCourses().subscribe(data => {
      this.recentCourses = data;
      console.log(data);
    });
  }

  public toggleShowCreateCourse(): void {
    this.showCreateCourse = !this.showCreateCourse;
  }

}
