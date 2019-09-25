import { TestBed } from '@angular/core/testing';

import { CoursePartService } from './course-part.service';

describe('CoursePartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursePartService = TestBed.get(CoursePartService);
    expect(service).toBeTruthy();
  });
});
