import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit {

  bus!: Bus

  constructor(
    private busSRV: BusService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getBus()
  }

  getBus():void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.busSRV.getBus(id).subscribe(
      res => {
        this.bus = res
      }
    )
  }

}
