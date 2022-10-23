import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { game } from 'src/app/classes/game.model';
import { team } from 'src/app/classes/team.model';
import { tournament } from 'src/app/classes/tournament.model';
import { gameServices } from 'src/app/services/gameServices.service';
import { teamServices } from 'src/app/services/teamServices.service';
import { tournamentServices } from 'src/app/services/tournamentServices.service';
@Component({
  selector: 'app-add-game',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #addGameForm = "ngForm" (ngSubmit) = "OnSubmit(addGameForm)">
    Add Game
        <div class="field">
        <label class="label">
        Enter a New Game ID
        </label>
        <div class="control">
          <input class="input" type="gameID" placeholder="e.g 5" name="gameID" #gameID="ngModel" [(ngModel)]="Game.gameID" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Day
        </label>
        <div class="control">
          <input class="input" type="day" placeholder="e.g 23" name="day" #day="ngModel" [(ngModel)] ="Game.day" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Month
        </label>
        <div class="control">
          <input class="input" type="timemonth" placeholder="e.g 3" name="month" #month="ngModel" [(ngModel)]="Game.month" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Year
        </label>
        <div class="control">
          <input class="input" type="year" placeholder="e.g 2001" name="year" #year="ngModel" [(ngModel)]="Game.year" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Time
        </label>
        <div class="control">
          <input class="input" type="time" placeholder="e.g 12:00 PM" name="time" #time="ngModel" [(ngModel)]="Game.time" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Existing Tournament ID
        </label>
        <select name ="gtid" #gtid ="ngModel" [(ngModel)]="Game.tid">
        <option *ngFor="let t of Tournament" [value]="t.id">
        {{t.id}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        New Existing Home Team
        </label>
        <select name ="hName" #hName ="ngModel" [(ngModel)]="Game.hName">
        <option *ngFor="let t of TeamSel" [value]="t.name">
        {{t.name}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Existing Away Team
        </label>
        <select name ="aName" #aName ="ngModel" [(ngModel)]="Game.aName">
        <option *ngFor="let t of TeamSel" [value]="t.name">
        {{t.name}}
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
export class AddGameComponent implements OnInit {
  Game: game = new game();
  GameSel:game[];
  Tournament:tournament[];
  TeamSel:team[];
  constructor(private gService: gameServices, private tService: tournamentServices,
    private teService: teamServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Game = {
      gameID: 0,
      day: "",
      month: "",
      year: "",
      time: "",
      tid: 0,
      hName: "",
      aName: ""
    }
  }

  ngOnInit(): void {
    this.tService.getTournaments()
.subscribe((data: any) => {
  this.Tournament=data as tournament[]
});
this.teService.getTeam()
.subscribe((data: any) => {
  this.TeamSel=data as team[]
});
  }

  OnSubmit(form: NgForm){
    this.gService.postGame(this.Game)
    .subscribe((data: any)=>{
      this.ResetForm();
    })
  }
}
