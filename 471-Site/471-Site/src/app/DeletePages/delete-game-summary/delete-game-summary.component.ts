import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { game } from 'src/app/classes/game.model';
import { gameSummary } from 'src/app/classes/gameSummary.model';
import { gameServices } from 'src/app/services/gameServices.service';
import { gameSummaryServices } from 'src/app/services/gameSummaryServices.service';
@Component({
  selector: 'app-delete-game-summary',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #deleteGameSummaryForm = "ngForm" (ngSubmit) = "OnSubmit(deleteGameSummaryForm)">
    Game Summary Removal
        <div class="field">
        <label class="label">
        GameID
        </label>
        <select name ="gid" #gid ="ngModel" [(ngModel)]="GameSummary.gameID">
        <option *ngFor="let g of Game" [value]="g.gameID">
        {{g.gameID}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        Score
        </label>
        <select name ="score" #score ="ngModel" [(ngModel)]="GameSummary.score">
        <option *ngFor="let g of GameSumSel" [value]="g.score">
        {{g.score}}
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
export class DeleteGameSummaryComponent implements OnInit {
  GameSummary:gameSummary = new gameSummary();
  GameSumSel:gameSummary[];
  Game:game[];
  constructor(private gsService: gameSummaryServices,private gService: gameServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.GameSummary = {
      score: "",
      gameID: 0,
      winner: "",
      loser: ""
    }
  }

  ngOnInit(): void {
    this.gsService.getGameSummary()
.subscribe((data: any) => {
  this.GameSumSel=data as gameSummary[]
});
this.gService.getGame()
.subscribe((data: any) => {
  this.Game=data as game[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.GameSummary.score, this.GameSummary.gameID);
    this.gsService.deleteGameSummary(this.GameSummary.score, this.GameSummary.gameID)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
