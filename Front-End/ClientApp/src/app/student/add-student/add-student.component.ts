import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/shared/student.model';
import { StudentService } from 'src/app/shared/student.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  
  constructor(public service:StudentService,private toastr: ToastrService) { }

  

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(this.service.formData.Id==0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm){
    this.service.postPaymentDetail().subscribe(
      next=>{
        this.resetForm(form);
        this.toastr.success('Submitted successfully','Student Added')
      },
      error=>{
        console.log(error);
      }
    );
  }

  updateRecord(form: NgForm){
    this.service.putPaymentDetail().subscribe(
      next=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully','Student Info Updated')
      },
      error=>{
        console.log(error);
      }
    );
  }

  resetForm(form: NgForm)
  {
    form.form.reset();
    this.service.formData = new Student();
  }

}
