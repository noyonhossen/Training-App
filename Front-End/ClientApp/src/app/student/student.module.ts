import { NgModule } from '@angular/core';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddStudentComponent,
    ViewStudentsComponent,
    EditStudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'view-students',component:ViewStudentsComponent},
      {path:'student-details/:id',component:StudentDetailsComponent},
      {path:'add-student',component:AddStudentComponent},
      {path:'edit-student/:id',component:EditStudentComponent},
    ]),
    SharedModule
  ]
})
export class StudentModule { }
