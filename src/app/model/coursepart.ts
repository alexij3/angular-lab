import {Course} from './course';

export class Coursepart {

    id: number;
    title: string;
    content: string;
    course: Course;

    constructor(id: number, title: string, content: string, course: Course) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.course = course;
    }
}
