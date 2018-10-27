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

  insertSchoolCourse(schoolcourse: Schoolcourse): Observable<Returnstatus> {
    console.log('start insert');
    return this.http.post(`${this.baseUrl}/schoolcourses/schoolcourseinsert`, JSON.stringify({ data: schoolcourse }))
      .pipe(map((res) => {
        console.log(res);
        this.returnstatus = res['data'][0]
        console.log(this.returnstatus);
        console.log('end insert');
        return this.returnstatus;
      }),
        catchError(this.handleError));
  }

  updateSchoolCourse(schoolcourse: Schoolcourse): Observable<Returnstatus> {
    console.log('start update');
    return this.http.post(`${this.baseUrl}/schoolcourses/schoolcourseupdate`, JSON.stringify({ data: schoolcourse }))
      .pipe(map((res) => {
        console.log(res);
        this.returnstatus = res['data'][0]
        console.log(this.returnstatus);
        console.log('end update');
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

  students: Student[];
  getStudents(): Observable<Student[]> {
    //console.log('start');
    return this.http.get(`${this.baseUrl}/students/students`).pipe(
      map((res) => {
        //console.log(res);
        this.students = res['data'];
        return this.students;
      }),
      catchError(this.handleError));
  }

  studentdetails: Student
  getStudentdetails(PantherID): Observable<Student> {
    console.log('start get');
    console.log(PantherID);
    return this.http.get(`${this.baseUrl}/students/students?id=${PantherID}`).pipe(
      map((res) => {
        //console.log(res['data']);
        this.studentdetails = res['data'][0];
        //console.log(this.schoolcoursedetail);
        return this.studentdetails;
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
