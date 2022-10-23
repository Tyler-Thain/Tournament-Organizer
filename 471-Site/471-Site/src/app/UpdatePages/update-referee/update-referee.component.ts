import { Component, OnInit } from '@angular/core';
import { referee } from 'src/app/classes/referee.model';
import { NgForm } from '@angular/forms';
import { refereeServices } from 'src/app/services/refereeServices.service';
import { game } from 'src/app/classes/game.model';
import { gameServices } from 'src/app/services/gameServices.service';
@Component({
  selector: 'app-update-referee',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #updateRefereeForm = "ngForm" (ngSubmit) = "OnSubmit(updateRefereeForm)">
    Referee Update
        <div class="field">
        <label class="label">
        Enter an Existing Referee SIN
        </label>
        <select name ="rsin" #rsin ="ngModel" [(ngModel)]="Referee.sin">
        <option *ngFor="let r of RefereeSel" [value]="r.sin">
        {{r.sin}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        New Sport
        </label>
        <div class="control">
          <input class="input" type="sport" placeholder="e.g Curling" name="sport" #sport="ngModel" [(ngModel)]="Referee.sport" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New First Name
        </label>
        <div class="control">
          <input class="input" type="fName" placeholder="e.g Michael" name="fName" #fName="ngModel" [(ngModel)]="Referee.fName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Last Name
        </label>
        <div class="control">
          <input class="input" type="lName" placeholder="e.g Card" name="lName" #lName="ngModel" [(ngModel)]="Referee.lName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Existing Game ID
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
export class UpdateRefereeComponent implements OnInit {
  Referee:referee = new referee();
  Game:game[];
  RefereeSel:referee[];
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
this.rService.getReferees()
.subscribe((data: any) => {
  this.RefereeSel=data as referee[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.Referee.sin, this.Referee.sport, this.Referee.fName, this.Referee.lName, this.Referee.gameID);
    this.rService.updateReferee(this.Referee.sin, this.Referee.sport, this.Referee.fName, this.Referee.lName, this.Referee.gameID)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
