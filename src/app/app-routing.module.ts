import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusCreateEditComponent } from './bus/bus-create-edit/bus-create-edit.component';
import { BusDetailsComponent } from './bus/bus-details/bus-details.component';
import { BusComponent } from './bus/bus.component';
import { ClassCreateEditComponent } from './class/class-create-edit/class-create-edit.component';
import { ClassDetailsComponent } from './class/class-details/class-details.component';
import { ClassComponent } from './class/class.component';
import { HomeComponent } from './home/home.component';
import { StudentCreateEditComponent } from './student/student-create-edit/student-create-edit.component';
import { StudentDeatilsComponent } from './student/student-deatils/student-deatils.component';
import { StudentComponent } from './student/student.component';
import { TeacherCreateEditComponent } from './teacher/teacher-create-edit/teacher-create-edit.component';
import { TeacherDeatilsComponent } from './teacher/teacher-deatils/teacher-deatils.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'bus', component: BusComponent },
  { path: 'bus-details/:id', component: BusDetailsComponent },
  { path: 'bus-Create', component: BusCreateEditComponent },
  { path: 'bus-Edit/:id', component: BusCreateEditComponent },

  { path: 'teacher', component: TeacherComponent },
  { path: 'teacher-details/:id', component: TeacherDeatilsComponent },
  { path: 'teacher-Create', component: TeacherCreateEditComponent },
  { path: 'teacher-Edit/:id', component: TeacherCreateEditComponent },

  { path: 'class', component: ClassComponent },
  { path: 'class-details/:id', component: ClassDetailsComponent },
  { path: 'class-Create', component: ClassCreateEditComponent },
  { path: 'class-Edit/:id', component: ClassCreateEditComponent },


  { path: 'student', component: StudentComponent },
  { path: 'student-details/:id', component: StudentDeatilsComponent },
  { path: 'student-Create', component: StudentCreateEditComponent },
  { path: 'student-Edit/:id', component: StudentCreateEditComponent },




  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
