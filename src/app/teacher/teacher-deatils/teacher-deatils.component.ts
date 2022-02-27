import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-deatils',
  templateUrl: './teacher-deatils.component.html',
  styleUrls: ['./teacher-deatils.component.css']
})
export class TeacherDeatilsComponent implements OnInit {

  teacher!: Teacher

  constructor(
    private teacherSVC: TeacherService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getTeacher()
  }

  getTeacher(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.teacherSVC.getTeacher(id).subscribe(
      res => {
        this.teacher = res
      }
    )
  }

}
