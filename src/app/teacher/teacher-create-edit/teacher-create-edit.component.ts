import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pageMode } from 'src/app/shared/enums/pageMode';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-create-edit',
  templateUrl: './teacher-create-edit.component.html',
  styleUrls: ['./teacher-create-edit.component.css']
})
export class TeacherCreateEditComponent implements OnInit {

  pageMode: pageMode = pageMode.Create

  pageModeEnum = pageMode;


  teacherId: number = 0

  teacher!: Teacher


  /*   public gender2LabelMapping = Gender2LabelMapping;
  
    public genders = Object.values(Gender); */

  constructor(
    private teacherSRV: TeacherService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.checkPageModeCreateOrEdit();

    if (this.pageMode == pageMode.Edit) {
      this.setPageModeToEdit();
    }

  }

  teacherForm = this.fb.group({
    id: [0],
    name: [""],
    age: [""],
    gender: [""],
  })

  checkPageModeCreateOrEdit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.pageMode = pageMode.Edit
      this.teacherId = parseInt(this.route.snapshot.paramMap.get('id') as string)
    }
  }

  setPageModeToEdit() {
    this.teacherSRV.getTeacher(this.teacherId).subscribe(
      res => {
        this.teacherForm.patchValue({
          id: res.id,
          name: res.name,
          age: res.age,
          gender: res.gender
        })
        this.teacher = res
      }
    )
  }

  submitCreateEditTeacher() {
    if (this.teacherForm.valid) {
      if (this.pageMode == pageMode.Create) {
        this.teacherSRV.addTeacher(this.teacherForm.value).subscribe(
          res => {
            this.router.navigate(['/teacher'])
          }
        )
      }
      else if (this.pageMode == pageMode.Edit) {
        this.teacherSRV.editTeacher(this.teacherForm.value).subscribe(
          res => {
            this.router.navigate(['/teacher'])
          }
        )
      }
    }
  }



}
