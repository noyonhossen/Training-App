import { Injectable } from '@angular/core';
import { Student } from './student.model';

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError,tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly baseUrl = 'https://www.trainingapp.somee.com/api/Student';
  constructor(private http:HttpClient) { }

  formData:Student= new Student();
  list:Student[];

  postStudent(){
    return this.http.post(this.baseUrl,this.formData);
  }

  putStudent(){
    return this.http.put(`${this.baseUrl}/${this.formData.id}`,this.formData);
  }

  deleteStudent(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl).pipe(
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
