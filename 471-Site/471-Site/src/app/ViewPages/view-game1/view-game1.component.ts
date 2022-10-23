import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tournament } from 'src/app/classes/tournament.model';
import { Router } from '@angular/router';
import { tournamentServices } from 'src/app/services/tournamentServices.service';

export var tournIDGame: number;

@Component({
  selector: 'app-view-game1',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #landingGameForm = "ngForm" (ngSubmit) = "OnSubmit(landingGameForm)">
    Specific Tournament Games
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
        <button class="button is-primary is-fullwidth" routerLink ="/gamePage">
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
      background-image: url('/assets/Images/game.jpeg') !important;
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
export class ViewGame1Component implements OnInit {
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
    tournIDGame = this.Tournament.id;
    this.router.navigate(['/gameView'])
  }
}
