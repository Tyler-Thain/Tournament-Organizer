import { Component, OnInit } from '@angular/core';
import { game } from 'src/app/classes/game.model';
import { NgForm } from '@angular/forms';
import { gameServices } from 'src/app/services/gameServices.service';
import { tournament } from 'src/app/classes/tournament.model';
import { tournamentServices } from 'src/app/services/tournamentServices.service';
import { team } from 'src/app/classes/team.model';
import { teamServices } from 'src/app/services/teamServices.service';
@Component({
  selector: 'app-update-game',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #updateGameForm = "ngForm" (ngSubmit) = "OnSubmit(updateGameForm)">
    Game Update
        <div class="field">
        <label class="label">
        Enter an Existing Game ID
        </label>
        <select name ="gid" #gid ="ngModel" [(ngModel)]="Game.gameID">
        <option *ngFor="let g of GameSel" [value]="g.gameID">
        {{g.gameID}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        New Day
        </label>
        <div class="control">
          <input class="input" type="day" placeholder="e.g 23" name="day" #day="ngModel" [(ngModel)] ="Game.day" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Month
        </label>
        <div class="control">
          <input class="input" type="timemonth" placeholder="e.g 3" name="month" #month="ngModel" [(ngModel)]="Game.month" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Year
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
        New Existing Tournament ID
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
        New Existing Away Team
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
export class UpdateGameComponent implements OnInit {
  Game:game = new game();
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
    this.gService.getGame()
    .subscribe((data: any) => {
      this.GameSel=data as game[]
});
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
    console.log(this.Game.gameID, this.Game.day, this.Game.month, this.Game.year, this.Game.time, this.Game.tid, this.Game.hName, this.Game.aName);
    this.gService.updateGame(this.Game.gameID, this.Game.day, this.Game.month, this.Game.year, this.Game.time, this.Game.tid, this.Game.hName, this.Game.aName)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
