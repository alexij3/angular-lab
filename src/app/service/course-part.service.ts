import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {Coursepart} from '../model/coursepart';

@Injectable({
  providedIn: 'root'
})
export class CoursePartService {

  baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public createCoursePart(coursePart: Coursepart): Observable<Coursepart> {
    console.log(coursePart);
    return this.httpClient.post<Coursepart>(this.baseUrl + '/courses/parts/create', coursePart);
  }

  public getCourseParts(courseId: number) {
    return this.httpClient.get(this.baseUrl + '/courses/' + courseId + '/parts');
  }
}
