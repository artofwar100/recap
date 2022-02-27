import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students!: Student[]

  spinner: boolean = false;

  constructor(
    private studentSRV: StudentService
  ) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.spinner = true
    this.studentSRV.getStudents().subscribe(
      res => {
        this.students = res
        this.spinner = false
      }
    )
  }

  deleteStudent(id: number) {
    this.studentSRV.deleteStudent(id).subscribe(
      res => {
        this.getStudents
      }
    )
  }

}
