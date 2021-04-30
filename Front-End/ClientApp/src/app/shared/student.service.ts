import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  readonly baseUrl = 'http://localhost:49615/api/Student';
  constructor(private http:HttpClient) { }

  formData:Student= new Student();
  list:Student[];

  postPaymentDetail(){
    return this.http.post(this.baseUrl,this.formData);
  }

  putPaymentDetail(){
    return this.http.put(`${this.baseUrl}/${this.formData.Id}`,this.formData);
  }

  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(result => this.list = result as Student[]);
  }
}
