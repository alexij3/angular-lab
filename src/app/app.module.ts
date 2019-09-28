import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpClientModule } from "@angular/common/http";
import { CourseComponent } from './course/course.component';
import { CoursemaintComponent } from './coursemaint/coursemaint.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule } from '@angular/forms';
import { CourseformComponent } from './courseform/courseform.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CoursePartDetailsComponent } from './course-part-details/course-part-details.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    CourseComponent,
    CoursemaintComponent,
    CourseformComponent,
    SanitizeHtmlPipe,
    CoursedetailsComponent,
    CoursePartDetailsComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RichTextEditorAllModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
