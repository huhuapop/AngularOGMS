import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Schoolcourse } from './schoolcourse';


@Component({
  selector: 'app-schoolcourses',
  templateUrl: './schoolcourses.component.html',
  styleUrls: ['./schoolcourses.component.scss']
})
export class SchoolcoursesComponent implements OnInit {

  schoolcourses$: Object;
  error = '';
  success = '';


  constructor( private data: DataService) { }

  ngOnInit() {
    this.data.getSchoolCourses().subscribe(
      data => this.schoolcourses$ = data
    )
  }

  deleteschoolcourse(id,i) {
    this.resetErrors();

    this.data.deleteSchoolCourse(id)
      .subscribe(
        (res: Schoolcourse[]) => {
          //this.schoolcourses$ = res;
          this.success = 'Deleted successfully';
          console.log(i);
          //this.schoolcourses$.splice(i, 1)
        },
        (err) => this.error = err
      );
  }

  private resetErrors() {
    this.success = '';
    this.error = '';
  }

}
