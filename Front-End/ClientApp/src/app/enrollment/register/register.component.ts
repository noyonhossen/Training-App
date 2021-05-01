import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from 'src/app/shared/enrollment.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Enrollment } from 'src/app/shared/enrollment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:EnrollmentService,private toastr: ToastrService,
    private router: Router) {
      
     }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postEnrollment().subscribe(
      next=>{
        this.resetForm(form);
        this.toastr.success('Submitted successfully','Enroll successfully');
        this.router.navigate(['/view-registrations']);
      },
      error=>{
        console.log(error);
      }
    );
  }

  resetForm(form: NgForm)
  {
    form.form.reset();
    this.service.formData = new Enrollment();
  }

}
