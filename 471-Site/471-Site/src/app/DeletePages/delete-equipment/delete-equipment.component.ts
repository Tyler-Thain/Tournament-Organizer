import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { equipment } from 'src/app/classes/equipment.model';
import { equipmentServices } from 'src/app/services/equipmentServices.service';

@Component({
  selector: 'app-delete-equipment',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #deleteEquipmentForm = "ngForm" (ngSubmit) = "OnSubmit(deleteEquipmentForm)">
    Equipment Removal
        <div class="field">
        <label class="label">
        Equipment ID
        </label>
        <select name ="eid" #eid ="ngModel" [(ngModel)]="Equipment.equipID">
        <option *ngFor="let e of EquipmentSel" [value]="e.equipID">
        {{e.equipID}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/equipPage">
        Back
        </button>
        </div>
    </form>
  </div>
  </div>
  </div>
</section>
  `,
  styles: [
    `
    .hero{
      background-image: url('/assets/Images/equipment.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    select{
      text-align: center !important;
      width: 100%
    }
    `
  ]
})
export class DeleteEquipmentComponent implements OnInit {
  Equipment: equipment = new equipment()
  EquipmentSel:equipment[];
  constructor(private eService: equipmentServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Equipment = {
      equipID: 0,
      sport: "",
      parkID: 0,
      gameID: 0
    }
  }

  ngOnInit(): void {
    this.eService.getEquipment()
.subscribe((data: any) => {
  this.EquipmentSel=data as equipment[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.Equipment.equipID);
    this.eService.deleteEquipment(this.Equipment.equipID)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }


}
