import { Component, OnInit } from '@angular/core';
import { tournament } from 'src/app/classes/tournament.model';
import { tournamentServices } from 'src/app/services/tournamentServices.service';
import { FormsModule, NgForm } from '@angular/forms';
import { tournamentOrganizer } from 'src/app/classes/tournamentOrganizer.model';
import { TournamentOrganizerLoginComponent } from 'src/app/tournament-organizer-login/tournament-organizer-login.component';
import { toServices } from 'src/app/services/toServices.service';
import { athleticParkServices } from 'src/app/services/athleticParkServices.service';
import { athleticPark } from 'src/app/classes/athleticPark.model';

@Component({
  selector: 'app-update-tournament',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #updateTournamentForm = "ngForm" (ngSubmit) = "OnSubmit(updateTournamentForm)">
    Torunament Update
        <div class="field">
        <label class="label">
        Enter an Existing Tournament ID
        </label>
        <select name ="tid" #tid ="ngModel" [(ngModel)]="Tournament.id">
        <option *ngFor="let t of TournamentSel" [value]="t.id">
        {{t.id}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        New Name
        </label>
        <div class="control">
          <input class="input" type="name" placeholder="e.g NBA Playoffs" name="name" #name="ngModel" [(ngModel)]="Tournament.name" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Sport
        </label>
        <div class="control">
          <input class="input" type="sport" placeholder="e.g Golf" name="sport" #sport="ngModel" [(ngModel)]="Tournament.sport" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Start Date
        </label>
        <div class="control">
          <input class="input" type="startDate" placeholder="e.g mm-dd-yyyy" name="startDate" #startDate="ngModel" [(ngModel)]="Tournament.startDate" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New End Date
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
        New Existing Park ID
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
  `,
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
export class UpdateTournamentComponent implements OnInit {
  Tournament:tournament = new tournament();
  TournamentSel:tournament[];
  TOSel:tournamentOrganizer[];
  AthleticSel:athleticPark[];
  constructor(private tService: tournamentServices, private toService:toServices,
    private aService:athleticParkServices) { }

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

  ngOnInit(): void {
    this.tService.getTournaments()
    .subscribe((data: any) => {
      this.TournamentSel=data as tournament[]
    });
    this.toService.getUser()
    .subscribe((data: any) => {
      this.TOSel=data as tournamentOrganizer[]
    });
    this.aService.getAthleticParks()
.subscribe((data: any) => {
  this.AthleticSel=data as athleticPark[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.Tournament.id, this.Tournament.name, this.Tournament.sport, this.Tournament.startDate, this.Tournament.endDate, this.Tournament.username, this.Tournament.parkID);
    this.tService.updateTournament(this.Tournament.id, this.Tournament.name, this.Tournament.startDate, this.Tournament.endDate, this.Tournament.username, this.Tournament.parkID, this.Tournament.sport)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
