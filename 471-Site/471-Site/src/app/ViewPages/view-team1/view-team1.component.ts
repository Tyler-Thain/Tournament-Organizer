import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tournament } from 'src/app/classes/tournament.model';
import { tournamentServices } from 'src/app/services/tournamentServices.service';

export var tournIDTeam: number
@Component({
  selector: 'app-view-team1',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #landingTeamForm = "ngForm" (ngSubmit) = "OnSubmit(landingTeamForm)">
    Specific Tournament Teams
        <div class="field">
        <label class="label">
        Tournament ID
        </label>
        <select name ="tid" #tid ="ngModel" [(ngModel)]="Tournament.id">
          <option *ngFor="let t of TournamentSel" [value]="t.id">
          {{t.id}}
          </option>
        </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/teamPage">
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
      background-image: url('/assets/Images/team.jpg') !important;
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
export class ViewTeam1Component implements OnInit {
  Tournament:tournament = new tournament();
  TournamentSel:tournament[];
  constructor(private router: Router, private tService:tournamentServices) { }

  ngOnInit(): void {
    this.tService.getTournaments()
      .subscribe((data: any) => {
        this.TournamentSel=data as tournament[]
  });
  }
  OnSubmit(form:NgForm){
    tournIDTeam = this.Tournament.id;
    this.router.navigate(['/teamView'])
  }
}
