import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { player } from 'src/app/classes/player.model';
import { team } from 'src/app/classes/team.model';
import { playerServices } from 'src/app/services/playerServices.service';
@Component({
  selector: 'app-delete-player',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #deletePlayerForm = "ngForm" (ngSubmit) = "OnSubmit(deletePlayerForm)">
    Player Removal
        <div class="field">
        <label class="label">
        Username
        </label>
        <select name ="username" #username ="ngModel" [(ngModel)]="Player.username">
        <option *ngFor="let p of PlayerSel" [value]="p.username">
        {{p.username}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/playerPage">
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
      background-image: url('/assets/Images/player.jpg') !important;
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
export class DeletePlayerComponent implements OnInit {
  Player:player = new player();
  PlayerSel:player[];
  constructor(private pService: playerServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Player = {
      username: "",
      password: "",
      fName: "",
      lName: "",
      age: 0,
      number: 0,
      position: "",
      tName: ""
    }
  }

  ngOnInit(): void {
    this.pService.getPlayer()
    .subscribe((data: any) => {
      this.PlayerSel=data as player[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.Player.username);
    this.pService.deletePlayer(this.Player.username)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
