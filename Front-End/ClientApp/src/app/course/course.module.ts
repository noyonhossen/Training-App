import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddCourseComponent,
    EditCourseComponent,
    ViewCoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'view-courses',component:ViewCoursesComponent},
      {path:'course-details/:id',component:CourseDetailsComponent},
      {path:'add-course',component:AddCourseComponent},
      {path:'edit-course/:id',component:EditCourseComponent},
    ]),
    SharedModule
  ]
})
export class CourseModule { }
