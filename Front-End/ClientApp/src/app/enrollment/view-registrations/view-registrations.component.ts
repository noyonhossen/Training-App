import { Component, OnInit } from '@angular/core';
import { Enrollment } from 'src/app/shared/enrollment.model';
import { EnrollmentService } from 'src/app/shared/enrollment.service';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-view-registrations',
  templateUrl: './view-registrations.component.html',
  styleUrls: ['./view-registrations.component.css']
})
export class ViewRegistrationsComponent implements OnInit {

  errorMessage:string;
  enrollments: Enrollment[];

  constructor(public service: EnrollmentService,private toastr: ToastrService,
    public studentService:StudentService) {
    this.getEnrollments();
  }

  getEnrollments(){
    this.service.getEnrollments().subscribe({
      next: enrollments=>{
          this.enrollments = enrollments;
      },
      error: err=>this.errorMessage = err
    });
  }

  ngOnInit(): void {
    
  }

  onDelete(id:number)
  {
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteEnrollment(id).subscribe(
        next=>{
          this.getEnrollments();
          this.toastr.error('Delete successfully','Enrollment deleted successfully')
        },
        error=>{
          console.log(error);
        }
      );
    }
  }

}
