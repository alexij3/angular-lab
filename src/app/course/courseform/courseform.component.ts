import { Component, OnInit } from '@angular/core';
import {Course} from '../../model/course';
import {NgForm} from '@angular/forms';
import {CourseService} from '../../service/course.service';
import {AppComponent} from '../../app.component';
import {CoursePartService} from '../../service/course-part.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';
import {CoursePart} from '../../model/course-part';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css'],
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
export class CourseformComponent implements OnInit {

  course = new Course(null, '', '', '', null, null, 0);
  coursePart = new CoursePart(null, '', '');
  editMode: boolean = false;

  public tools: object = {
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };

  constructor(private courseService: CourseService,
              private coursePartService: CoursePartService,
              private appComponent: AppComponent,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.editMode = this.route.params['value'].editMode;
    if (this.editMode) {
      this.course = JSON.parse(this.route.params['value'].course) as Course;
    } else {
      this.course = new Course(null, '', '', '', null, null, 0);
    }
  }

  public createCourse(form: NgForm): void {
      if (form.valid) {
          if (!this.editMode) {
            this.courseService.create(this.course).subscribe(
              response => {
                window.alert('Course has been successfully added!');
                this.routeBack();
              },
              err => window.alert('Something went wrong during course creation.'));
          } else {
            this.courseService.update(this.course).subscribe(
              response => {
                window.alert('Course has been successfully updated!');
                this.routeBack();
              },
              err => window.alert('Something went wrong during course update.'));
          }
      } else {
          window.alert('Form is invalid');
      }
  }

  routeBack() {
    this.location.back();
  }
}
