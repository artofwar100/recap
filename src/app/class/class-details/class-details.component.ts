import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../class';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {

  class!: Class

  constructor(
    private classSRV: ClassService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getClass();
  }

  getClass():void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.classSRV.getClass(id).subscribe(
      res => {
        this.class = res
      }
    )
  }

}
