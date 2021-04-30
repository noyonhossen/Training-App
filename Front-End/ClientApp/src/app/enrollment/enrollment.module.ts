import { NgModule } from '@angular/core';
import { ViewRegistrationsComponent } from './view-registrations/view-registrations.component';
import { EditRegistrationComponent } from './edit-registration/edit-registration.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ViewRegistrationsComponent,
    RegisterComponent,
    EditRegistrationComponent,
    RegistrationDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'view-registrations',component:ViewRegistrationsComponent},
      {path:'registration-details/:id',component:RegistrationDetailsComponent},
      {path:'register',component:RegisterComponent},
      {path:'edit-registration/:id',component:EditRegistrationComponent},
    ]),
    SharedModule
  ]
})
export class EnrollmentModule { }
