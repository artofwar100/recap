import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pageMode } from 'src/app/shared/enums/pageMode';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-create-edit',
  templateUrl: './bus-create-edit.component.html',
  styleUrls: ['./bus-create-edit.component.css']
})
export class BusCreateEditComponent implements OnInit {
  

  pageMode: pageMode = pageMode.Create

  pageModeEnum = pageMode;


  busId: number = 0;

  bus! : Bus
  

/*   public fuelType2LabelMapping = FuelType2LabelMapping;

  public fuels = Object.values(FuelType); */


  constructor(
    private busSRV: BusService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.checkPageModeCreateOrEdit();

    if(this.pageMode == pageMode.Edit){
      this.setPageModeToEdit()
    }
  }

  busForm = this.fb.group({
    id: [0],
    model: [""],
    fuelType: [""]
  })

  checkPageModeCreateOrEdit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.pageMode = pageMode.Edit
      this.busId = parseInt(this.route.snapshot.paramMap.get('id') as string)
    }
  }

  setPageModeToEdit() {
    this.busSRV.getBus(this.busId).subscribe(
      res => {
        this.busForm.patchValue({
          id: res.id,
          model: res.model,
          fuelType: res.fuelType
        })
        this.bus = res
      }
    )
  }

  submitCreateEditBus() {
    if (this.busForm.valid) {
      if (this.pageMode == pageMode.Create) {
        this.busSRV.addBus(this.busForm.value).subscribe(
          res => {
            this.router.navigate(['/bus'])
          }
        )
      }
      else if (this.pageMode == pageMode.Edit) {
        this.busSRV.editBus(this.busForm.value).subscribe(
          res => {
            this.router.navigate(['/bus'])
          }
        )
      }
    }
  }


}


