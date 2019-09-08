import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursemaintComponent } from './coursemaint.component';

describe('CoursemaintComponent', () => {
  let component: CoursemaintComponent;
  let fixture: ComponentFixture<CoursemaintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursemaintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursemaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
