import { Injectable } from '@angular/core';
import { Course } from './course.model';

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError,tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  readonly baseUrl = 'https://www.trainingapp.somee.com/api/Course';
  constructor(private http:HttpClient) { }

  formData:Course= new Course();
  list:Course[];

  postCourse(){
    return this.http.post(this.baseUrl,this.formData);
  }

  putCourse(){
    return this.http.put(`${this.baseUrl}/${this.formData.id}`,this.formData);
  }

  deleteCourse(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCourses():Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl).pipe(
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
