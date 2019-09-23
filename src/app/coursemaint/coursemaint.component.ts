import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {NgForm} from '@angular/forms';
import * as moment from 'moment';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-coursemaint',
  templateUrl: './coursemaint.component.html',
  styleUrls: ['./coursemaint.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class CoursemaintComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  public toggleShowCreateCourse(): void {
    this.appComponent.toggleShowCreateCourse();
  }
}
