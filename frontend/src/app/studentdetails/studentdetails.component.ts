import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Student } from '../students/student';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {

  pantherid$: string;
  student$: Student;
  error = '';
  success = '';
  studentdetailsForm: FormGroup;

  constructor(private fb: FormBuilder, private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.pantherid$ = params.id)
  }

  ngOnInit() {
    this.studentdetailsForm = this.fb.group({
      PantherID: '', 
      FirstName: '',
      MiddleName: '',
      LastName: '',
      Email: '',
      MobileNumber: '',
      College: '',
      Department: '',
      Location: '',
      Degree: '',
      Major: '',
      Concentration: '',
      matricTerm:'',
      Position: '',
      Status: ''
    });
    console.log(this.pantherid$);
    if (this.pantherid$ !== "new") {
      this.data.getStudentdetails(this.pantherid$).subscribe(
        data => this.studentdetailsForm.reset({
          PantherID: data.PantherID,
          FirstName: data.FirstName,
          MiddleName: data.MiddleName,
          LastName: data.LastName,
          Email: data.Email,
          MobileNumber: data.MobileNumber,
          College: data.College,
          Department: data.Department,
          Location: data.Location,
          Degree: data.Degree,
          Major: data.Major,
          Concentration: data.Concentration,
          matricTerm: data.matricTerm,
          Position: data.Position,
          Status: data.Status
        })
      )
    }
  }

}
