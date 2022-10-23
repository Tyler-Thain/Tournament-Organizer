import { Component, OnInit } from '@angular/core';
import { tournament } from 'src/app/classes/tournament.model';
import { NgForm } from '@angular/forms';
import { tournamentServices } from 'src/app/services/tournamentServices.service';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { tournamentOrganizer } from 'src/app/classes/tournamentOrganizer.model';
import { athleticPark } from 'src/app/classes/athleticPark.model';
import { athleticParkServices } from 'src/app/services/athleticParkServices.service';
import { toServices } from 'src/app/services/toServices.service';


@Component({
  selector: 'app-add-tournament',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #addTournamentForm = "ngForm" (ngSubmit) = "OnSubmit(addTournamentForm)">
    Add Athletic Park
        <div class="field">
        <label class="label">
        Enter a New Tournament ID
        </label>
        <div class="control">
          <input class="input" type="id" placeholder="e.g 5" name="id" #id="ngModel" [(ngModel)]="Tournament.id" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Name
        </label>
        <div class="control">
          <input class="input" type="name" placeholder="e.g NBA Playoffs" name="name" #name="ngModel" [(ngModel)]="Tournament.name" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Sport
        </label>
        <div class="control">
          <input class="input" type="sport" placeholder="e.g Golf" name="sport" #sport="ngModel" [(ngModel)]="Tournament.sport" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Start Date
        </label>
        <div class="control">
          <input class="input" type="startDate" placeholder="e.g mm-dd-yyyy" name="startDate" #startDate="ngModel" [(ngModel)]="Tournament.startDate" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        End Date
        </label>
        <div class="control">
          <input class="input" type="endDate" placeholder="e.g mm-dd-yyyy" name="endDate" #endDate="ngModel" [(ngModel)]="Tournament.endDate" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Your Username
        </label>
        <select name ="tu" #tu ="ngModel" [(ngModel)]="Tournament.username">
        <option *ngFor="let to of TOSel" [value]="to.username">
        {{to.username}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Existing Park ID
        </label>
        <select name ="aid" #aid ="ngModel" [(ngModel)]="Tournament.parkID">
        <option *ngFor="let a of AthleticSel" [value]="a.parkID">
        {{a.parkID}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/TournamentPage">
        Back
        </button>
        </div>
    </form>
  </div>
  </div>
  </div>
</section>
  `
  ,
  styles: [
    `
    .hero{
      background-image: url('/assets/Images/Tournamentpage.jpg') !important;
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
export class AddTournamentComponent implements OnInit {
  Tournament: tournament = new tournament();
  TOSel:tournamentOrganizer[];
  AthleticSel:athleticPark[];
  constructor(private tService: tournamentServices, private toService:toServices,
    private aService:athleticParkServices) { }

  ngOnInit(): void {
    this.toService.getUser()
    .subscribe((data: any) => {
      this.TOSel=data as tournamentOrganizer[]
    });
    this.aService.getAthleticParks()
.subscribe((data: any) => {
  this.AthleticSel=data as athleticPark[]
});
  }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Tournament = {
      id: 0,
      name: "",
      sport: "",
      startDate: "",
      endDate: "",
      username: "",
      parkID: 0
    }
  }

  newNum = 0;

  OnSubmit(form: NgForm){
    this.tService.postTournament(this.Tournament)
    .subscribe((data: any)=>{
      this.ResetForm();
    });
  }
}
