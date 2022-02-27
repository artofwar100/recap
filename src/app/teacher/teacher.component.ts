import { Component, OnInit } from '@angular/core';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teacher! : Teacher[]

  spinner: boolean = false;

  constructor(private teacherSVC : TeacherService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers():void{
    this.spinner = true
    this.teacherSVC.getTeachers().subscribe(
      res => {
        this.teacher = res
        this.spinner = false
      }
    )
  }

  deleteTeacher(id : number){
    this.teacherSVC.deleteTeacher(id).subscribe(
      res => {
        this.getTeachers();
      }
    )
  }

}
