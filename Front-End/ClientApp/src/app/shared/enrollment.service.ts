import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError,tap } from "rxjs/operators";
import { Enrollment } from './enrollment.model';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { CourseService } from './course.service';
import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  readonly baseUrl = 'http://localhost:49615/api/StudentRegistration';
  constructor(private http:HttpClient,
    public studentService:StudentService,
    public courseService:CourseService) {
    this.getStudents();
    this.getCourses();
   }

   getStudents(){
    this.studentService.getStudents().subscribe({
      next: students=>{
          this.students = students;
      },
      error: err=>this.errorMessage = err
    });
    
  }

  getCourses(){
    this.courseService.getCourses().subscribe({
      next: courses=>{
          this.courses = courses;
      },
      error: err=>this.errorMessage = err
    });
  }

  formData:Enrollment= new Enrollment();
  list:Enrollment[];
  students:Student[];
  courses:Course[];
  errorMessage:string;
  selectedCourseId:number= null;
  selectedStudentId:number= null;

  postEnrollment(){
    this.formData.courseId = +this.selectedCourseId;
    this.formData.studentId = +this.selectedStudentId;
    return this.http.post(this.baseUrl,this.formData);
  }

  putEnrollment(){
    return this.http.put(`${this.baseUrl}/${this.formData.id}`,this.formData);
  }

  deleteEnrollment(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getEnrollments():Observable<Enrollment[]>{
    return this.http.get<Enrollment[]>(this.baseUrl).pipe(
        tap(data=>console.log('Data gets successfully'+JSON.stringify(data))),
        catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse){
      let errorMessage = '';
      if(err.error instanceof ErrorEvent){
          errorMessage = `An error occured : ${err.error.message}`;
      }
      else{
          errorMessage = `server returned code: ${err.status}, error message is : ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
  }
}
