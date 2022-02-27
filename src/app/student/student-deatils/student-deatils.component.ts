import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-deatils',
  templateUrl: './student-deatils.component.html',
  styleUrls: ['./student-deatils.component.css']
})
export class StudentDeatilsComponent implements OnInit {

  student!: Student

  constructor(
    private studentSRV: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getBus()
  }

  getBus():void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.studentSRV.getStudent(id).subscribe(
      res => {
        this.student = res
      }
    )
  }

}
