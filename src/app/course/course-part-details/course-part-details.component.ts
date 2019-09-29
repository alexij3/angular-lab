import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {CoursePart} from '../../model/course-part';
import {animate, style, transition, trigger} from '@angular/animations';

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
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.coursePart = JSON.parse(this.route.params['value'].coursePart) as CoursePart;
  }

  routeBack() {
    this.location.back();
  }
}
