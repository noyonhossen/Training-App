import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/shared/course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(public service:CourseService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
  }

  insertRecord(form: NgForm){
    this.service.postCourse().subscribe(
      next=>{
        this.resetForm(form);
        this.toastr.success('Submitted successfully','Course Added successfully')
      },
      error=>{
        console.log(error);
      }
    );
  }

  resetForm(form: NgForm)
  {
    form.form.reset();
    this.service.formData = new Course();
  }

}
