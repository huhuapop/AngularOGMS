import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Returnstatus } from '../returnstatus';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Schoolcourse } from '../schoolcourses/schoolcourse';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-schoolcoursedetails',
  templateUrl: './schoolcoursedetails.component.html',
  styleUrls: ['./schoolcoursedetails.component.scss']
})
export class SchoolcoursedetailsComponent implements OnInit {

  schoolcourseid$: string;
  schoolcourse$: Schoolcourse;
  error = '';
  success = '';
  schoolcoursedetailForm: FormGroup;

  constructor(private fb: FormBuilder,private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.schoolcourseid$ = params.id)
  }

  ngOnInit() {
    this.schoolcoursedetailForm = this.fb.group({
      SchoolCourseID: '',
      Subject: '',
      Course: '',
      CourseName: '',
      Credit: '',
      Prerequisites: '',
      Description: ''
    });
    //console.log(this.schoolcourseid$);
    if (this.schoolcourseid$ !== "new") {
      this.data.getSchoolCoursedetails(this.schoolcourseid$).subscribe(
        data => this.schoolcoursedetailForm.reset({
          SchoolCourseID: data.SchoolCourseID,
          Subject: data.Subject,
          Course: data.Course,
          CourseName: data.CourseName,
          Credit: data.Credit,
          Prerequisites: data.Prerequisites,
          Description: data.Description
        })
      )
    }
   
  }

  _submitForm({ value }) {
    // Save value
    console.log(value);
    if (value.SchoolCourseID == '') {
      this.data.insertSchoolCourse({
        SchoolCourseID: value.SchoolCourseID,
        Subject: value.Subject,
        Course: value.Course,
        CourseName: value.CourseName,
        Credit: value.Credit,
        Prerequisites: value.Prerequisites,
        Description: value.Description,
      })
        .subscribe(
          (res: Returnstatus) => {
            // Update the list of schoolcourse
            // Inform the user
            this.success = 'Created successfully';
            window.location.assign('schoolcourses');
          },
          (err) => this.error = err
        );
    }
    else {
      this.data.updateSchoolCourse({
        SchoolCourseID: value.SchoolCourseID,
        Subject: value.Subject,
        Course: value.Course,
        CourseName: value.CourseName,
        Credit: value.Credit,
        Prerequisites: value.Prerequisites,
        Description: value.Description,
      })
        .subscribe(
          (res: Returnstatus) => {
            // Update the list of schoolcourse
            // Inform the user
            this.success = 'Updated successfully';

            window.location.assign('schoolcourses');
          },
          (err) => this.error = err
        );
    }
  }

  private resetErrors() {
    this.success = '';
    this.error = '';
  }

}
