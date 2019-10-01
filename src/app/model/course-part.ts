import {Course} from './course';

export class CoursePart {

  id: number;
  course: Course;
  title: string;
  content: string;


  constructor(id: number, course: Course, title: string, content: string) {
    this.id = id;
    this.course = course;
    this.title = title;
    this.content = content;
  }
}
