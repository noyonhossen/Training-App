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
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'dashboard',component:DashboardComponent},
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'**',redirectTo:'dashboard',pathMatch:'full'}
    ]),
    StudentModule,
    CourseModule,
    EnrollmentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
