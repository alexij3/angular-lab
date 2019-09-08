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

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    BooksComponent,
    CourseComponent, CoursemaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RichTextEditorAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
