import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Course} from '../model/course';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  public getRecentCourses() {
    return this.httpClient.get(this.baseUrl + '/courses/recent');
  }

  public createCourse(course: Course): Observable<Course> {
    return this.httpClient.post<Course>(this.baseUrl + '/courses/create', course);
  }
}
