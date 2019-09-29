import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRegistrationComponent} from './auth/user-registration/user-registration.component';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {CourseformComponent} from './course/courseform/courseform.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CoursedetailsComponent} from './course/coursedetails/coursedetails.component';
import {CoursePartFormComponent} from './course/course-part-form/course-part-form.component';
import {CoursePartDetailsComponent} from './course/course-part-details/course-part-details.component';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: MainComponent, children: [
      {path: '', component: DashboardComponent}
    ]},
  {path: 'register', component: UserRegistrationComponent},
  {path: 'login', component: MainComponent, children: [
      {path: '', component: LoginComponent}
    ]},
  {path: 'create-course', component: MainComponent, children: [
      {path: '', component: CourseformComponent}
    ]},
  {path: 'edit-course', component: MainComponent, children: [
      {path: '', component: CourseformComponent}
    ]},
  {path: 'course-details', component: MainComponent, children: [
      {path: '', component: CoursedetailsComponent}
    ]},
  {path: 'course-part-details', component: MainComponent, children: [
      {path: '', component: CoursePartDetailsComponent}
    ]},
  {path: 'create-course-part', component: MainComponent, children: [
      {path: '', component: CoursePartFormComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
