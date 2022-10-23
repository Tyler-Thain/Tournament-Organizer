import { Component, OnInit } from '@angular/core';
import { player } from 'src/app/classes/player.model';
import { playerServices } from 'src/app/services/playerServices.service';
import { NgForm } from '@angular/forms';
import { refereeServices } from 'src/app/services/refereeServices.service';
import { referee } from 'src/app/classes/referee.model';
import { game } from 'src/app/classes/game.model';
import { gameServices } from 'src/app/services/gameServices.service';
@Component({
  selector: 'app-add-referee',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #addRefereeForm = "ngForm" (ngSubmit) = "OnSubmit(addRefereeForm)">
    Add Referee
        <div class="field">
        <label class="label">
        Enter a New Referee SIN
        </label>
        <div class="control">
          <input class="input" type="sin" placeholder="e.g 123-456-789" name="sin" #sin="ngModel" [(ngModel)]="Referee.sin" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Sport
        </label>
        <div class="control">
          <input class="input" type="sport" placeholder="e.g Curling" name="sport" #sport="ngModel" [(ngModel)]="Referee.sport" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        First Name
        </label>
        <div class="control">
          <input class="input" type="fName" placeholder="e.g Michael" name="fName" #fName="ngModel" [(ngModel)]="Referee.fName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Last Name
        </label>
        <div class="control">
          <input class="input" type="lName" placeholder="e.g Card" name="lName" #lName="ngModel" [(ngModel)]="Referee.lName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Existing Game ID
        </label>
        <select name ="gid" #gid ="ngModel" [(ngModel)]="Referee.gameID">
        <option *ngFor="let g of Game" [value]="g.gameID">
        {{g.gameID}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/refereePage">
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
      background-image: url('/assets/Images/Referee.png') !important;
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
export class AddRefereeComponent implements OnInit {
  Referee: referee = new referee();
  Game:game[];
  constructor(private rService: refereeServices, private gService: gameServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Referee = {
      sin: "",
      sport: "",
      fName: "",
      lName: "",
      gameID: 0
    }
  }

  ngOnInit(): void {
    this.gService.getGame()
    .subscribe((data: any) => {
      this.Game=data as game[]
});
  }
 OnSubmit(form: NgForm){
    this.rService.postReferee(this.Referee)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }
 
}
