import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpClientModule } from "@angular/common/http";
import { BooksComponent } from './books/books.component';
import { CourseComponent } from './course/course.component';
import { CoursemaintComponent } from './coursemaint/coursemaint.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { FormsModule } from '@angular/forms';
import { CourseformComponent } from './courseform/courseform.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    BooksComponent,
    CourseComponent,
    CoursemaintComponent,
    CourseformComponent,
    SanitizeHtmlPipe,
    CoursedetailsComponent
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
