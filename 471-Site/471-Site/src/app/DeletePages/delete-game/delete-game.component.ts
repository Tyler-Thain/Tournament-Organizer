import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { game } from 'src/app/classes/game.model';
import { gameServices } from 'src/app/services/gameServices.service';
@Component({
  selector: 'app-delete-game',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #deleteGameForm = "ngForm" (ngSubmit) = "OnSubmit(deleteGameForm)">
    Game Removal
        <div class="field">
        <label class="label">
        Game ID
        </label>
        <select name ="gid" #gid ="ngModel" [(ngModel)]="Game.gameID">
        <option *ngFor="let g of GameSel" [value]="g.gameID">
        {{g.gameID}}
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
export class DeleteGameComponent implements OnInit {
  Game:game = new game();
  GameSel:game[];
  constructor(private gService: gameServices) { }

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
  }

  OnSubmit(form: NgForm){
    console.log(this.Game.gameID);
    this.gService.deleteGame(this.Game.gameID)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
