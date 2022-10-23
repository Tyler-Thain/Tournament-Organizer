import { Component, OnInit } from '@angular/core';
import { gameSummary } from 'src/app/classes/gameSummary.model';
import { NgForm } from '@angular/forms';
import { gameSummaryServices } from 'src/app/services/gameSummaryServices.service';
import { gameServices } from 'src/app/services/gameServices.service';
import { game } from 'src/app/classes/game.model';
import { team } from 'src/app/classes/team.model';
import { teamServices } from 'src/app/services/teamServices.service';
@Component({
  selector: 'app-add-game-summary',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #addGameSummaryForm = "ngForm" (ngSubmit) = "OnSubmit(addGameSummaryForm)">
    Add Game Summary
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
        Enter a New Score
        </label>
        <div class="control">
          <input class="input" type="score" placeholder="e.g 6-4" name = "score" #score="ngModel" [(ngModel)] ="GameSummary.score" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Winner
        </label>
        <select name ="wName" #wName ="ngModel" [(ngModel)]="GameSummary.winner">
        <option *ngFor="let t of TeamSel" [value]="t.name">
        {{t.name}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Loser
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
export class AddGameSummaryComponent implements OnInit {
  GameSummary: gameSummary = new gameSummary();
  Game:game[];
  TeamSel:team[];
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
  }

  OnSubmit(form: NgForm){
    this.gsService.postGameSummary(this.GameSummary)
    .subscribe((data: any)=>{
      this.ResetForm();
    });
  }

}
