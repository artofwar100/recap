import { Component, OnInit } from '@angular/core';
import { Bus } from './bus';
import { BusService } from './bus.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  buses! : Bus[]

  spinner: boolean = false;

  constructor(private busSRV : BusService) { }

  ngOnInit(): void {
    this.getBuses();
  }

  getBuses():void{
    this.busSRV.getBuses().subscribe(
      res => {
        this.buses = res
      }
    )
  }

  deleteBus(id : number){
    this.busSRV.deleteBus(id).subscribe(
      res => {
        this.getBuses();
      }
    )
  }

}
