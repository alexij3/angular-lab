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
  router: string;

  constructor(private _router: Router,
              private courseService: CourseService) {

    this.router = _router.url;
  }

  ngOnInit() {
  }
}
