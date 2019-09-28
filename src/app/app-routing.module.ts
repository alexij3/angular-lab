import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {CourseformComponent} from './courseform/courseform.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CoursedetailsComponent} from './coursedetails/coursedetails.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: MainComponent, children: [
      {path: '', component: DashboardComponent}
    ]},
  {path: 'register', component: UserRegistrationComponent},
  {path: 'create-course', component: MainComponent, children: [
      {path: '', component: CourseformComponent}
    ]},
  {path: 'edit-course', component: MainComponent, children: [
      {path: '', component: CourseformComponent}
    ]},
  {path: 'course-details', component: MainComponent, children: [
      {path: '', component: CoursedetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
