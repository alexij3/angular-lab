import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePartDetailsComponent } from './course-part-details.component';

describe('CoursePartDetailsComponent', () => {
  let component: CoursePartDetailsComponent;
  let fixture: ComponentFixture<CoursePartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePartDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
