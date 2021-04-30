import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/shared/student.model';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id:number;
  students: Student;

   constructor(private route:ActivatedRoute,
    public service:StudentService,
    private toastr: ToastrService) { 
      this.id = +this.route.snapshot.paramMap.get('id');
    }

   ngOnInit(): void {

   }
 
   onSubmit(form: NgForm){
     this.updateRecord(form);
   }
 
   updateRecord(form: NgForm){
    this.service.putStudent().subscribe(
      next=>{
        this.toastr.info('Updated successfully','Student info updated successfully')
      },
      error=>{
        console.log(error);
      }
    );
  }

}
