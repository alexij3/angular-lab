import { Component, OnInit } from '@angular/core';
import {Course} from '../model/course';
import {NgForm} from '@angular/forms';
import {CourseService} from '../service/course.service';
import {AppComponent} from "../app.component";
import {Coursepart} from "../model/coursepart";
import {CoursePartService} from "../service/course-part.service";
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  course = new Course(null, '', '', '', null, null, 0);
  coursePart = new Coursepart(null, '', '', null);
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
    this.course = JSON.parse(this.route.params['value'].course) as Course;
    this.editMode = this.route.params['value'].editMode;
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

    public createCoursePart(form: NgForm): void {
        console.log(this.coursePart);
        if (form.valid) {
            this.coursePartService.createCoursePart(this.coursePart).subscribe(
                response => {
                    window.alert('Course part has been successfully added!');
                    this.routeBack();
                },
                err => window.alert('Something went wrong during course part creation.'));
        } else {
            window.alert('Form is invalid');
        }
    }

  routeBack() {
    this.location.back();
  }
}
