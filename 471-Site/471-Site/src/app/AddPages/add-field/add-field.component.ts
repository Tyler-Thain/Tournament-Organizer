import { Component, OnInit } from '@angular/core';
import { field } from 'src/app/classes/field.model';
import { NgForm } from '@angular/forms';
import { fieldServices } from 'src/app/services/fieldServices.service';
import { game } from 'src/app/classes/game.model';
import { athleticParkServices } from 'src/app/services/athleticParkServices.service';
import { athleticPark } from 'src/app/classes/athleticPark.model';
import { gameServices } from 'src/app/services/gameServices.service';
@Component({
  selector: 'app-add-field',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #addFieldForm = "ngForm" (ngSubmit) = "OnSubmit(addFieldForm)">
    Add Field
        <div class="field">
        <label class="label">
        Enter a new Field Number
        </label>
        <div class="control">
          <input class="input" type="FieldID" placeholder="e.g 5" name="fieldNo" #fieldNo="ngModel" [(ngModel)]=Field.fieldNo required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Existing Game ID
        </label>
        <select name ="gid" #gid ="ngModel" [(ngModel)]="Field.gameID">
        <option *ngFor="let g of GameSel" [value]="g.gameID">
        {{g.gameID}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Existing Park ID
        </label>
        <select name ="aid" #aid ="ngModel" [(ngModel)]="Field.parkID">
        <option *ngFor="let a of AthleticSel" [value]="a.parkID">
        {{a.parkID}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Sport
        </label>
        <div class="control">
          <input class="input" type="sport" placeholder="e.g Basketball" name="sport" #sport="ngModel" [(ngModel)]="Field.sport" required>
        </div>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/fieldPage">
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
      background-image: url('/assets/Images/fieldpage.jpg') !important;
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
export class AddFieldComponent implements OnInit {
  Field:field = new field();
  GameSel:game[];
  AthleticSel:athleticPark[];
  constructor(private fService: fieldServices, private gService: gameServices,
    private aService: athleticParkServices) { }
  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Field = {
      fieldNo: 0,
      parkID: 0,
      gameID: 0,
      sport: ""
    }
  }

  ngOnInit(): void {
    this.gService.getGame()
    .subscribe((data: any) => {
      this.GameSel=data as game[]
});
this.aService.getAthleticParks()
.subscribe((data: any) => {
  this.AthleticSel=data as athleticPark[]
});
  }
  OnSubmit(form: NgForm){
    this.fService.postField(this.Field)
    .subscribe((data: any)=>{
      this.ResetForm();
    });
  }
}
