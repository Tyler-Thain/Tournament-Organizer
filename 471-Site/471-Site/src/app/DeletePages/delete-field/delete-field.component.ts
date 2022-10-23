import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { athleticPark } from 'src/app/classes/athleticPark.model';
import { field } from 'src/app/classes/field.model';
import { game } from 'src/app/classes/game.model';
import { athleticParkServices } from 'src/app/services/athleticParkServices.service';
import { fieldServices } from 'src/app/services/fieldServices.service';
import { gameServices } from 'src/app/services/gameServices.service';

@Component({
  selector: 'app-delete-field',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #deleteFieldForm = "ngForm" (ngSubmit) = "OnSubmit(deleteFieldForm)">
    Field Removal
        <div class="field">
        <label class="label">
        FieldNo
        </label>
        <select name ="fid" #fid ="ngModel" [(ngModel)]="Field.fieldNo">
        <option *ngFor="let f of FieldSel" [value]="f.fieldNo">
        {{f.fieldNo}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Game ID
        </label>
        <select name ="gid" #gid ="ngModel" [(ngModel)]="Field.gameID">
        <option *ngFor="let g of GameSel" [value]="g.gameID">
        {{g.gameID}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Park ID
        </label>
        <select name ="aid" #aid ="ngModel" [(ngModel)]="Field.parkID">
        <option *ngFor="let a of AthleticSel" [value]="a.parkID">
        {{a.parkID}}
        </option>
      </select>
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
export class DeleteFieldComponent implements OnInit {
  Field:field = new field();
  GameSel:game[];
  FieldSel:field[];
  AthleticSel:athleticPark[];
  constructor(private fService: fieldServices, private gService: gameServices,
    private aService: athleticParkServices) { }
  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Field = {
      fieldNo: 0,
      gameID: 0,
      parkID: 0,
      sport: ""
    }
  }

  ngOnInit(): void {
    this.gService.getGame()
    .subscribe((data: any) => {
      this.GameSel=data as game[]
});
this.fService.getField()
.subscribe((data: any) => {
  this.FieldSel=data as field[]
});
this.aService.getAthleticParks()
.subscribe((data: any) => {
  this.AthleticSel=data as athleticPark[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.Field.fieldNo, this.Field.gameID, this.Field.parkID);
    this.fService.deleteField(this.Field.fieldNo, this.Field.gameID, this.Field.parkID)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
