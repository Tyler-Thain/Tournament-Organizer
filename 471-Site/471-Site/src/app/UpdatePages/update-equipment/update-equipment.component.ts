import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { athleticPark } from 'src/app/classes/athleticPark.model';
import { equipment } from 'src/app/classes/equipment.model';
import { game } from 'src/app/classes/game.model';
import { athleticParkServices } from 'src/app/services/athleticParkServices.service';
import { equipmentServices } from 'src/app/services/equipmentServices.service'; 
import { gameServices } from 'src/app/services/gameServices.service';

@Component({
  selector: 'app-update-equipment',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #updateEquipmentForm = "ngForm" (ngSubmit) = "OnSubmit(updateEquipmentForm)">
    Equipment Update
        <div class="field">
        <label class="label">
        Enter an Existing Equipment ID
        </label>
        <select name ="eid" #eid ="ngModel" [(ngModel)]="Equipment.equipID">
        <option *ngFor="let e of EquipmentSel" [value]="e.equipID">
        {{e.equipID}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Enter New Sport
        </label>
        <div class="control">
          <input class="input" type="sport" placeholder="e.g Hockey" name ="sport" #sport="ngModel" [(ngModel)]="Equipment.sport" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Existing Park ID
        </label>
        <select name ="aid" #aid ="ngModel" [(ngModel)]="Equipment.parkID">
        <option *ngFor="let a of AthleticSel" [value]="a.parkID">
        {{a.parkID}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        New Existing GameID
        </label>
        <select name ="gid" #gid ="ngModel" [(ngModel)]="Equipment.gameID">
        <option *ngFor="let g of GameSel" [value]="g.gameID">
        {{g.gameID}}
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
export class UpdateEquipmentComponent implements OnInit {
  Equipment: equipment = new equipment();
  EquipmentSel:equipment[];
  GameSel:game[];
  AthleticSel:athleticPark[];
  constructor(private eService: equipmentServices, private gService: gameServices,
    private aService: athleticParkServices) { }

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
    this.aService.getAthleticParks()
.subscribe((data: any) => {
  this.AthleticSel=data as athleticPark[]
});
this.gService.getGame()
.subscribe((data: any) => {
  this.GameSel=data as game[]
});
this.eService.getEquipment()
.subscribe((data: any) => {
  this.EquipmentSel=data as equipment[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.Equipment.equipID, this.Equipment.sport, this.Equipment.parkID, this.Equipment.gameID);
    this.eService.updateEquipment(this.Equipment.equipID, this.Equipment.sport, this.Equipment.parkID, this.Equipment.gameID)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
