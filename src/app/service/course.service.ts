import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  public getRecentCourses() {
    return this.httpClient.get(this.baseUrl + '/courses/recent');
  }
}
