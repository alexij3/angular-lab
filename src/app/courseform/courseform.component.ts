import { Component, OnInit } from '@angular/core';
import {Course} from '../model/course';
import {NgForm} from '@angular/forms';
import {CourseService} from '../service/course.service';

@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styleUrls: ['./courseform.component.css']
})
export class CourseformComponent implements OnInit {

  course = new Course('', '', null, null, 0, '');

  public tools: object = {
    items: [
      'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
      'LowerCase', 'UpperCase', '|', 'Undo', 'Redo', '|',
      'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
      'Indent', 'Outdent', '|', 'CreateLink', 'CreateTable',
      'Image', '|', 'ClearFormat', 'Print', 'SourceCode', '|', 'FullScreen']
  };

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  public onSubmit(form: NgForm): void {
    console.log('kek');
    if (form.valid) {
      console.log(this.course);
      this.courseService.createCourse(this.course).subscribe(
        response => console.log(response),
        err => console.log(err));
    } else {
        window.alert('Form is invalid');
    }
  }

}
