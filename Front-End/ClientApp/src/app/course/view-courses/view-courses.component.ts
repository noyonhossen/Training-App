import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { CourseService } from 'src/app/shared/course.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  errorMessage:string;
  courses: Course[];

  constructor(public service: CourseService,private toastr: ToastrService) {
    this.getCourses();
  }

  getCourses(){
    this.service.getCourses().subscribe({
      next: courses=>{
          this.courses = courses;
      },
      error: err=>this.errorMessage = err
    });
  }

  ngOnInit(): void {
    
  }

  onDelete(id:number)
  {
    if(confirm('Are you sure to delete this record?')){
      this.service.deleteCourse(id).subscribe(
        next=>{
          this.getCourses();
          this.toastr.error('Delete successfully','Course deleted successfully')
        },
        error=>{
          console.log(error);
        }
      );
    }
  }

}
