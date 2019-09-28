import {Component, Host, Inject, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {AppComponent} from '../app.component';
import {Coursepart} from '../model/coursepart';
import {CoursePartService} from '../service/course-part.service';
import {Location} from '@angular/common';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  course: Course;
  selectedCourseParts: any = [];
  public selectedCoursePart: Coursepart;

  constructor(private appComponent: AppComponent,
              private coursePartService: CoursePartService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.course = this.route.params['_value'];
    this.syncSelectedCourseParts();
  }
  public syncSelectedCourseParts() {
      this.coursePartService.getCourseParts(this.course.id).subscribe(data => {
          this.selectedCourseParts = data;
      });
  }

  routeBack() {
    this.location.back();
  }
}
