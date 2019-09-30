import {Component, Host, Inject, OnInit} from '@angular/core';
import {Course} from '../../model/course';
import {AppComponent} from '../../app.component';
import {CoursePartService} from '../../service/course-part.service';
import {Location} from '@angular/common';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {ActivatedRoute} from '@angular/router';
import {CoursePart} from '../../model/course-part';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css'],
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
export class CoursedetailsComponent implements OnInit {

  course: Course;
  selectedCourseParts: any = [];

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

  hasRole(role: string): boolean {
    return this.appComponent.userRoles.indexOf(role) >= 0;
  }

  routeBack() {
    this.location.back();
  }
}
