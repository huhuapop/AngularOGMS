import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcoursedetailsComponent } from './schoolcoursedetails.component';

describe('SchoolcoursedetailsComponent', () => {
  let component: SchoolcoursedetailsComponent;
  let fixture: ComponentFixture<SchoolcoursedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolcoursedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcoursedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
