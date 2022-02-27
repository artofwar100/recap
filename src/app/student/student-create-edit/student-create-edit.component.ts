import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from 'src/app/bus/bus';
import { BusService } from 'src/app/bus/bus.service';
import { Class } from 'src/app/class/class';
import { ClassService } from 'src/app/class/class.service';
import { pageMode } from 'src/app/shared/enums/pageMode';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-create-edit',
  templateUrl: './student-create-edit.component.html',
  styleUrls: ['./student-create-edit.component.css']
})
export class StudentCreateEditComponent implements OnInit {

  pageMode: pageMode = pageMode.Create

  pageModeEnum = pageMode;


  studentId!: number;

  student! : Student


  classLookUp! : Class[];

  busLookUp! : Bus[];


/*   public gender2LabelMapping = Gender2LabelMapping;

  public genders = Object.values(Gender); */



  constructor(
    private studentSRV: StudentService,
    private classSVR: ClassService,
    private busSRV: BusService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.checkPageModeCreateOrEdit();
    this.getLookUps();
    if(this.pageMode == pageMode.Edit){
      this.setPageModeToEdit()
    }
  }


  studentForm = this.fb.group({
    id : [0],
    name : [''],
    grade : [''],
    gender : [''],
    busId : [''],
    classesId : ['']
  })

  checkPageModeCreateOrEdit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.pageMode = pageMode.Edit
      this.studentId = parseInt(this.route.snapshot.paramMap.get('id') as string)
    }
  }

  setPageModeToEdit() {
    this.studentSRV.getStudent(this.studentId).subscribe(
      res => {
        this.studentForm.patchValue({
          id : res.id,
          name : res.name,
          grade : res.grade,
          gender : res.gender,
          busId : res.busId,
          classesId : res.classesId
        })
        this.student = res
      }
    )
  }

  submitCreateEditStudent() {
    if (this.studentForm.valid) {
      if (this.pageMode == pageMode.Create) {
        this.studentSRV.addStudent(this.studentForm.value).subscribe(
          res => {
            this.router.navigate(['/student'])
          }
        )
      }
      else if (this.pageMode == pageMode.Edit) {
        this.studentSRV.editStudent(this.studentForm.value).subscribe(
          res => {
            this.router.navigate(['/student'])
          }
        )
      }
    }
  }

  getLookUps(): void {
    this.getClassLookUp();
    this.getBusLookUp();
  }

  private getClassLookUp(): void {
    this.classSVR.getClasses().subscribe(
      res => {
        this.classLookUp = res
      }
    )
  }
  private getBusLookUp(): void {
    this.busSRV.getBuses().subscribe(
      res => {
        this.busLookUp = res
      }
    )
  }

}
