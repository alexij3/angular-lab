import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './auth/user-registration/user-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule } from '@angular/forms';
import { CourseformComponent } from './course/courseform/courseform.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursedetailsComponent } from './course/coursedetails/coursedetails.component';
import { CoursePartDetailsComponent } from './course/course-part-details/course-part-details.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursePartFormComponent } from './course/course-part-form/course-part-form.component';
import { LoginComponent } from './auth/login/login.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    CourseformComponent,
    SanitizeHtmlPipe,
    CoursedetailsComponent,
    CoursePartDetailsComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CoursePartFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RichTextEditorAllModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
