import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { game } from 'src/app/classes/game.model';
import { gameSummary } from 'src/app/classes/gameSummary.model';
import { team } from 'src/app/classes/team.model';
import { gameServices } from 'src/app/services/gameServices.service';
import { gameSummaryServices } from 'src/app/services/gameSummaryServices.service';
import { teamServices } from 'src/app/services/teamServices.service';
@Component({
  selector: 'app-update-game-summary',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #updateGameSummaryForm = "ngForm" (ngSubmit) = "OnSubmit(updateGameSummaryForm)">
    Game Summary Update
        <div class="field">
        <label class="label">
        Enter an Existing Game ID
        </label>
        <select name ="gid" #gid ="ngModel" [(ngModel)]="GameSummary.gameID">
        <option *ngFor="let g of Game" [value]="g.gameID">
        {{g.gameID}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Enter an Existing Score for Game ID
        </label>
        <select name ="score" #score ="ngModel" [(ngModel)]="GameSummary.score">
        <option *ngFor="let g of GameSumSel" [value]="g.score">
        {{g.score}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        New Winner
        </label>
        <select name ="wName" #wName ="ngModel" [(ngModel)]="GameSummary.winner">
        <option *ngFor="let t of TeamSel" [value]="t.name">
        {{t.name}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        New Loser
        </label>
        <select name ="lName" #lName ="ngModel" [(ngModel)]="GameSummary.loser">
        <option *ngFor="let t of TeamSel" [value]="t.name">
        {{t.name}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/gameSumPage">
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
      background-image: url('/assets/Images/gamesum.jpg') !important;
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
export class UpdateGameSummaryComponent implements OnInit {
  GameSummary: gameSummary = new gameSummary();
  Game:game[];
  TeamSel:team[];
  GameSumSel:gameSummary[];
  constructor(private gsService: gameSummaryServices, private gService: gameServices,
    private tService: teamServices) { }
  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.GameSummary = {
      gameID: 0,
      score: "",
      winner: "",
      loser: ""
    }
  }

  ngOnInit(): void {
    this.gService.getGame()
    .subscribe((data: any) => {
      this.Game=data as game[]
});
this.tService.getTeam()
.subscribe((data: any) => {
  this.TeamSel=data as team[]
});
this.gsService.getGameSummary()
.subscribe((data: any) => {
  this.GameSumSel=data as gameSummary[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.GameSummary.score, this.GameSummary.gameID, this.GameSummary.winner, this.GameSummary.loser);
    this.gsService.updateGameSummary(this.GameSummary.score, this.GameSummary.gameID, this.GameSummary.winner, this.GameSummary.loser)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
