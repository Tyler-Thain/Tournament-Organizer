import { Component, OnInit } from '@angular/core';
import { equipment } from 'src/app/classes/equipment.model';
import { equipmentServices } from 'src/app/services/equipmentServices.service';
import { NgForm } from '@angular/forms';
import { athleticParkServices } from 'src/app/services/athleticParkServices.service';
import { gameServices } from 'src/app/services/gameServices.service';
import { athleticPark } from 'src/app/classes/athleticPark.model';
import { game } from 'src/app/classes/game.model';
@Component({
  selector: 'app-add-equipment',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #addEquipmentForm = "ngForm" (ngSubmit) = "OnSubmit(addEquipmentForm)">
    Equipment Update
        <div class="field">
        <label class="label">
        Enter a New Equipment ID
        </label>
        <div class="control">
          <input class="input" type="equipID" placeholder="e.g 5" name ="equipID" #equipID="ngModel" [(ngModel)] = "Equipment.equipID" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Sport
        </label>
        <div class="control">
          <input class="input" type="sport" placeholder="e.g Hockey" name ="sport" #sport="ngModel" [(ngModel)]="Equipment.sport" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Existing Park ID
        </label>
        <select name ="aid" #aid ="ngModel" [(ngModel)]="Equipment.parkID">
        <option *ngFor="let a of AthleticSel" [value]="a.parkID">
        {{a.parkID}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Existing GameID
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
export class AddEquipmentComponent implements OnInit {
  Equipment: equipment = new equipment();
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
  }
  OnSubmit(form:NgForm){
    this.eService.addEquipment(this.Equipment)
    .subscribe((data: any)=>{
      this.ResetForm();
    })
  }
}
