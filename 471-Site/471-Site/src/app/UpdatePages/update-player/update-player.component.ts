import { Component, OnInit } from '@angular/core';
import { player } from 'src/app/classes/player.model';
import { FormsModule, NgForm } from '@angular/forms';
import { playerServices } from 'src/app/services/playerServices.service';
import { team } from 'src/app/classes/team.model';
import { teamServices } from 'src/app/services/teamServices.service';
@Component({
  selector: 'app-update-player',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #updatePlayerForm = "ngForm" (ngSubmit) = "OnSubmit(updatePlayerForm)">
    Player Update
        <div class="field">
        <label class="label">
        Enter an Existing Player Username
        </label>
        <select name ="username" #username ="ngModel" [(ngModel)]="Player.username">
        <option *ngFor="let p of PlayerSel" [value]="p.username">
        {{p.username}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        New First Name
        </label>
        <div class="control">
          <input class="input" type="FName" placeholder="e.g Michael" name="fName" #fName="ngModel" [(ngModel)]="Player.fName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Last Name
        </label>
        <div class="control">
          <input class="input" type="LName" placeholder="e.g Card" name="lName" #lName="ngModel" [(ngModel)]="Player.lName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Age
        </label>
        <div class="control">
          <input class="input" type="Age" placeholder="e.g 20" name="age" #age="ngModel" [(ngModel)]="Player.age" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Number
        </label>
        <div class="control">
          <input class="input" type="Number" placeholder="e.g 12" name="number" #number="ngModel" [(ngModel)]="Player.number" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Position
        </label>
        <div class="control">
          <input class="input" type="Position" placeholder="e.g Small Forward" name="position" #position="ngModel" [(ngModel)]="Player.position" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Existing Team
        </label>
        <select name ="tname" #tname ="ngModel" [(ngModel)]="Player.tName">
          <option *ngFor="let t of TeamSel" [value]="t.name">
          {{t.name}}
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
export class UpdatePlayerComponent implements OnInit {
  Player:player= new player();
  PlayerSel:player[];
  TeamSel:team[]
  constructor(private pService: playerServices, private tService: teamServices) { }
  playerPassword: player[];
  pPass: string;
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
this.tService.getTeam()
    .subscribe((data: any) => {
      this.TeamSel=data as team[]
});
  }

  OnSubmit(form: NgForm){
    this.pService.getPlayerByUsername(this.Player.username)
      .subscribe((data) =>
        {
          this.playerPassword = data as player[];
          this.pPass = this.playerPassword[0].password;
        });
    console.log(this.Player.username, this.Player.fName, this.Player.lName, this.Player.age, this.Player.number, this.Player.password, this.Player.tName);
    this.pService.updatePlayer(this.Player.username, this.pPass, this.Player.fName, this.Player.lName, this.Player.age, this.Player.number, this.Player.position, this.Player.tName)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
