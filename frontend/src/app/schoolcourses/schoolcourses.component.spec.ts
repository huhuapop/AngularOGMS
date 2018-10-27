import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcoursesComponent } from './schoolcourses.component';

describe('SchoolcoursesComponent', () => {
  let component: SchoolcoursesComponent;
  let fixture: ComponentFixture<SchoolcoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
