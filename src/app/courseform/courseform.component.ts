import { Component, OnInit } from '@angular/core';
import {Course} from '../model/course';
import {NgForm} from '@angular/forms';
import {CourseService} from '../service/course.service';
import {AppComponent} from "../app.component";
import {Coursepart} from "../model/coursepart";
import {CoursePartService} from "../service/course-part.service";

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  course = new Course(null, '', '', '', null, null, 0);
  coursePart = new Coursepart(null, '', '', null);
  isEditMode: boolean;

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
              private appComponent: AppComponent) { }

  ngOnInit() {
      this.coursePart.course = this.appComponent.selectedCourse;
      this.isEditMode = this.appComponent.showEditCourse;
      if (this.isEditMode) {
          this.course = this.appComponent.selectedCourse;
      }
  }

  public createCourse(form: NgForm): void {
      if (form.valid) {
        if (!this.isEditMode) {
            this.courseService.create(this.course).subscribe(
                response => {
                    window.alert('Course has been successfully added!');
                    this.appComponent.syncRecentCourses();
                    this.appComponent.toggleShowCreateCourse();
                },
                err => window.alert('Something went wrong during course creation.'));
        } else {
            this.courseService.update(this.course).subscribe(
                response => {
                    window.alert('Course has been successfully updated!');
                    this.appComponent.syncRecentCourses();
                    this.appComponent.toggleShowEditCourse(null);
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
                    window.alert('Course has been successfully added!');
                    this.appComponent.toggleShowCreateCoursePart();
                },
                err => window.alert('Something went wrong during course creation.'));
        } else {
            window.alert('Form is invalid');
        }
    }

  public toggleShowCreateCoursePart(): void {
      this.appComponent.toggleShowCreateCoursePart();
  }

  public toggleShowCreateEditCourse(): void {
      if (!this.isEditMode) {
          this.appComponent.toggleShowCreateCourse();
      } else {
          this.appComponent.toggleShowEditCourse(null);
      }
  }
}
