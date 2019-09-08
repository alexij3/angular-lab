import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {AppComponent} from "./app.component";
import {CoursemaintComponent} from './coursemaint/coursemaint.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'register', component: UserRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
