import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { TeacherComponent } from './teacher/teacher.component';
import { BusComponent } from './bus/bus.component';
import { HttpClientModule } from '@angular/common/http';
import { BusDetailsComponent } from './bus/bus-details/bus-details.component';
import { TeacherDeatilsComponent } from './teacher/teacher-deatils/teacher-deatils.component';
import { SharedModule } from './shared/shared-modul/shared.module';
import { BusCreateEditComponent } from './bus/bus-create-edit/bus-create-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherCreateEditComponent } from './teacher/teacher-create-edit/teacher-create-edit.component';
import { StudentComponent } from './student/student.component';
import { ClassComponent } from './class/class.component';
import { ClassDetailsComponent } from './class/class-details/class-details.component';
import { ClassCreateEditComponent } from './class/class-create-edit/class-create-edit.component';
import { StudentDeatilsComponent } from './student/student-deatils/student-deatils.component';
import { StudentCreateEditComponent } from './student/student-create-edit/student-create-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeacherComponent,
    BusComponent,
    BusDetailsComponent,
    TeacherDeatilsComponent,
    BusCreateEditComponent,
    TeacherCreateEditComponent,
    StudentComponent,
    ClassComponent,
    ClassDetailsComponent,
    ClassCreateEditComponent,
    StudentDeatilsComponent,
    StudentCreateEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
