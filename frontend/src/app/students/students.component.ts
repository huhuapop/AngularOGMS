import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Student} from './student'


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

   students$: Student;
  constructor(private data: DataService) { }

  ngOnInit() {
     this.data.getStudents().subscribe(
       data => this.students$ = data
    )
  }

}
