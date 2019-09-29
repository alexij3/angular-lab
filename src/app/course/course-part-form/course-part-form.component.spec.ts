import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePartFormComponent } from './course-part-form.component';

describe('CoursePartFormComponent', () => {
  let component: CoursePartFormComponent;
  let fixture: ComponentFixture<CoursePartFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePartFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
