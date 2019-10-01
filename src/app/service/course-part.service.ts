import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {CoursePart} from '../model/course-part';

@Injectable({
  providedIn: 'root'
})
export class CoursePartService {

  baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public createCoursePart(coursePart: CoursePart): Observable<CoursePart> {
    return this.httpClient.post<CoursePart>(this.baseUrl + '/courses/parts/create', coursePart);
  }

  public getCourseParts(courseId: number) {
    return this.httpClient.get(this.baseUrl + '/courses/' + courseId + '/parts');
  }

  public delete(id: any) {
    return this.httpClient.delete(this.baseUrl + '/courses/parts/' + id + '/delete');
  }

  public updateCoursePart(coursePart: CoursePart) {
    return this.httpClient.put<CoursePart>(this.baseUrl + '/courses/parts/update', coursePart);
  }
}
