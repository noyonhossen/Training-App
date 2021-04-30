import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/shared/student.model';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  errorMessage:string;
  students: Student[];

  constructor(public service: StudentService,private toastr: ToastrService) {
    this.getStudents();
  }

  getStudents(){
    this.service.getStudents().subscribe({
      next: students=>{
          this.students = students;
      },
      error: err=>this.errorMessage = err
    });
  }

  ngOnInit(): void {
    
  }

  onDelete(id:number)
  {
    if(confirm('Are you sure to delete thid record?')){
      this.service.deleteStudent(id).subscribe(
        next=>{
          this.getStudents();
          this.toastr.error('Delete successfully','Student deleted successfully')
        },
        error=>{
          console.log(error);
        }
      );
    }
  }

}
