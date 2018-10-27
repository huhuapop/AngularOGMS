import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Student } from './students/Student';
import { Schoolcourse } from './schoolcourses/schoolcourse';
import { Returnstatus } from './returnstatus';
import { Console } from '@angular/core/src/console';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'http://localhost/PHPOGMS';
  returnstatus: Returnstatus
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  students: Student[];
  getStudents(): Observable<Student[]> {
    //console.log('start');
    return this.http.get(`http://localhost/PHPOGMS/schoolcourses/students`).pipe(
     map((res) => {
       //console.log(res);
        this.students = res['data'];
        return this.students;
      }),
      catchError(this.handleError));
  }

  schoolcourses: Schoolcourse[]
  getSchoolCourses(): Observable<Student[]> {
    //console.log('start');
    return this.http.get(`${this.baseUrl}/schoolcourses/schoolcourses`).pipe(
      map((res) => {
        console.log(res);
        this.schoolcourses = res['data'];
        return this.schoolcourses;
      }),
      catchError(this.handleError));
  }

  schoolcoursedetail: Schoolcourse
  getSchoolCoursedetails(SchoolCourseId): Observable<Schoolcourse> {
    console.log('start get');
    console.log(SchoolCourseId);
    return this.http.get(`${this.baseUrl}/schoolcourses/schoolcourses?id=${SchoolCourseId}`).pipe(
      map((res) => {
        //console.log(res['data']);
        this.schoolcoursedetail = res['data'][0];
        //console.log(this.schoolcoursedetail);
        return this.schoolcoursedetail;
      }),
      catchError(this.handleError));
  }

  //updateSchoolCourse(schoolcourse:Schoolcourse): Observable<Returnstatus> {
  //  console.log('start update');
  //  //console.log(`${this.baseUrl}/schoolcourses/schoolcourseupdate`);
  //  //console.log(schoolcourse);
  //  return this.http.put(`${this.baseUrl}/schoolcourses/schoolcourseupdate`, { data:schoolcourse }).pipe(
  //    map((res) => {
  //      console.log(res['data']);
  //      this.returnstatus = res['data'][0];
  //      console.log(this.returnstatus);
  //      console.log('end update');
  //      return this.returnstatus;
  //    }),
  //    catchError(this.handleError));
  //}

  updateSchoolCourse(schoolcourse: Schoolcourse): Observable<Returnstatus> {
    console.log('start update');
    return this.http.post(`${this.baseUrl}/schoolcourses/schoolcourseupdate`, JSON.stringify({ data: schoolcourse }))
    //return this.http.post(`http://localhost/PHPOGMS/schoolcourses/schoolcourseupdate`, { data: schoolcourse })
    //return this.http.post(`http://localhost/angular-with_php_backend/backend/api/schoolcourseupdate`, { data: schoolcourse })
      .pipe(map((res) => {
        console.log(res);
        this.returnstatus = res['data'][0]
        console.log(this.returnstatus);
        console.log('end update');
        //this.cars.push(res['data']);
        return this.returnstatus;
      }),
        catchError(this.handleError));
  }
 
  deleteSchoolCourse(SchoolCourseId): Observable<Returnstatus> {
    console.log('start');
    return this.http.get(`${this.baseUrl}/schoolcourses/schoolcoursedelete?id=${SchoolCourseId}`).pipe(
      map((res) => {
        console.log(res['data']);
        this.returnstatus = res['data'][0];
        console.log(this.returnstatus);
        return this.returnstatus;
      }),
      catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
