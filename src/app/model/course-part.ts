import {Course} from './course';

export class CoursePart {

  course: Course;
  title: string;
  content: string;


  constructor(course: Course, title: string, content: string) {
    this.course = course;
    this.title = title;
    this.content = content;
  }
}
