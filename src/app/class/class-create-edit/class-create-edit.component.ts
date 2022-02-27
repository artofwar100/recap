import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pageMode } from 'src/app/shared/enums/pageMode';
import { Student } from 'src/app/student/student';
import { StudentService } from 'src/app/student/student.service';
import { Teacher } from 'src/app/teacher/teacher';
import { TeacherService } from 'src/app/teacher/teacher.service';
import { Class } from '../class';
import { ClassService } from '../class.service';
import { ClassCreateEdit } from '../classCreateEdit';

@Component({
  selector: 'app-class-create-edit',
  templateUrl: './class-create-edit.component.html',
  styleUrls: ['./class-create-edit.component.css']
})
export class ClassCreateEditComponent implements OnInit {

  pageMode: pageMode = pageMode.Create

  pageModeEnum = pageMode;


  classId! : number

  class!: Class


  teachersLookUp!: Teacher[]


  constructor(
    private classSVR : ClassService,
    private router : Router,
    private route : ActivatedRoute,
    private fb : FormBuilder,
    private teacherSRV : TeacherService
  ) { }

  ngOnInit(): void {
    this.checkPageModeCreateOrEdit();
    this.getLookUps();
    if(this.pageMode == pageMode.Edit){
      this.setPageModeToEdit()
    }
  }


  classForm = this.fb.group({
    id : [0],
    subject : [''],
    teacherId : [''],
    studentsId : [null]
  })

  checkPageModeCreateOrEdit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.pageMode = pageMode.Edit
      this.classId = parseInt(this.route.snapshot.paramMap.get('id') as string)
    }
  }

  setPageModeToEdit() {
    this.classSVR.getClass(this.classId).subscribe(
      res => {
        this.classForm.patchValue({
          id: res.id,
          subject: res.subject,
          teacherId: res.teacherId,
          studentsId : res.studentsId
        })
        this.class = res
      }
    )
  }

  submitCreateEditClass() {
    if (this.classForm.valid) {
      if (this.pageMode == pageMode.Create) {
        this.classSVR.addClass(this.classForm.value).subscribe(
          res => {
            this.router.navigate(['/class'])
          }
        )
      }
      else if (this.pageMode == pageMode.Edit) {
        this.classSVR.editClass(this.classForm.value).subscribe(
          res => {
            this.router.navigate(['/class'])
          }
        )
      }
    }
  }

  getLookUps(): void {
    this.getClassLookUp()
  }

  private getClassLookUp(): void {
    this.teacherSRV.getTeachers().subscribe(
      res => {
        this.teachersLookUp = res
      }
    )
  }


  

}
