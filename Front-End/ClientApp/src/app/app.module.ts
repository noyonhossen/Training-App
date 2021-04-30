import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { ViewRegistrationsComponent } from './enrollment/view-registrations/view-registrations.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'view-registrations',component:ViewRegistrationsComponent},
      {path:'',redirectTo:'view-registrations',pathMatch:'full'},
      {path:'**',redirectTo:'view-registrations',pathMatch:'full'}
    ]),
    StudentModule,
    CourseModule,
    EnrollmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
