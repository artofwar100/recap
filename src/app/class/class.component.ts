import { Component, OnInit } from '@angular/core';
import { Class } from './class';
import { ClassService } from './class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  classes!: Class[]

  spinner: boolean = false;

  constructor(
    private classSRV: ClassService
  ) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses(): void {
    this.spinner = true
    this.classSRV.getClasses().subscribe(
      res => {
        this.classes = res
        this.spinner = false
      }
    )
  }

  deleteClass(id: number) {
    this.classSRV.deleteClass(id).subscribe(
      res => {
        this.getClasses();
      }
    )
  }

}
