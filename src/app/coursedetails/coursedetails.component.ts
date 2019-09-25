import { Component, OnInit } from '@angular/core';
import {Course} from '../model/course';
import {AppComponent} from '../app.component';
import {Coursepart} from '../model/coursepart';
import {CoursePartService} from '../service/course-part.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  course: Course;
  selectedCourseParts: any = [];
  public selectedCoursePart: Coursepart;
  public showCoursePart: boolean;

  constructor(private appComponent: AppComponent,
              private coursePartService: CoursePartService) { }

  ngOnInit() {
    this.course = this.appComponent.selectedCourse;
    this.syncSelectedCourseParts();
  }

  public toggleShowCourseDetails(): void {
    this.appComponent.toggleShowCourseDetails(null);
  }

  public toggleShowCreateCoursePart(): void {
    this.appComponent.toggleShowCreateCoursePart();
  }

  public syncSelectedCourseParts() {
      this.coursePartService.getCourseParts(this.course.id).subscribe(data => {
          this.selectedCourseParts = data;
      });
  }

  public toggleShowCoursePart(coursePart: Coursepart) {
    this.selectedCoursePart = coursePart;
    this.appComponent.toggleShowCoursePart();
  }
}
