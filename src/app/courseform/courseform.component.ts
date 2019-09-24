import { Component, OnInit } from '@angular/core';
import {Course} from '../model/course';
import {NgForm} from '@angular/forms';
import {CourseService} from '../service/course.service';
import {AppComponent} from "../app.component";
import {Coursepart} from "../model/coursepart";

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  course = new Course(null, '', '', '', null, null, 0);
  coursePart = new Coursepart(null, '', '');

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
              private appComponent: AppComponent) { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm): void {
      if (form.valid) {
        this.courseService.createCourse(this.course).subscribe(
          response => {
             window.alert('Course has been successfully added!');
             this.appComponent.syncRecentCourses();
             this.appComponent.toggleShowCreateCourse();
          },
          err => window.alert('Something went wrong during course creation.'));
      } else {
          window.alert('Form is invalid');
      }
  }

  public toggleShowCreateCoursePart(): void {
      this.appComponent.toggleShowCreateCoursePart();
  }

  public toggleShowCreateCourse(): void {
      this.appComponent.toggleShowCreateCourse();
  }
}
