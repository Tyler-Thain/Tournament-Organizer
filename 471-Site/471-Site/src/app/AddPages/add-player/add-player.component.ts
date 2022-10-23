import { Component, OnInit } from '@angular/core';
import { player } from 'src/app/classes/player.model';
import { NgForm } from '@angular/forms';
import { playerServices } from 'src/app/services/playerServices.service';
import { teamServices } from 'src/app/services/teamServices.service';
import { team } from 'src/app/classes/team.model';
@Component({
  selector: 'app-add-player',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #addPlayerForm = "ngForm" (ngSubmit) ="OnSubmit(addPlayerForm)">
    Add Player
        <div class="field">
        <label class="label">
        Enter a New Player Username
        </label>
        <div class="control">
          <input class="input" type="Username" placeholder="e.g Dacard45" name="username" #username="ngModel" [(ngModel)]="Player.username" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Password
        </label>
        <div class="control">
          <input class="input" type="password" placeholder="e.g. cool password" name="password" #password ="ngModel" [(ngModel)]="Player.password" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        First Name
        </label>
        <div class="control">
          <input class="input" type="FName" placeholder="e.g Michael" name="fName" #fName="ngModel" [(ngModel)]="Player.fName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Last Name
        </label>
        <div class="control">
          <input class="input" type="LName" placeholder="e.g Card" name="lName" #lName="ngModel" [(ngModel)]="Player.lName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Age
        </label>
        <div class="control">
          <input class="input" type="Age" placeholder="e.g 20" name="age" #age="ngModel" [(ngModel)]="Player.age" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Number
        </label>
        <div class="control">
          <input class="input" type="Number" placeholder="e.g 12" name="number" #number="ngModel" [(ngModel)]="Player.number" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Position
        </label>
        <div class="control">
          <input class="input" type="Position" placeholder="e.g Small Forward" name="position" #position="ngModel" [(ngModel)]="Player.position" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Existing Team
        </label>
        <select name ="tname" #tname ="ngModel" [(ngModel)]="Player.tName">
        <option *ngFor="let t of TeamSel" [value]="t.name">
        {{t.name}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="Submit">
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
export class AddPlayerComponent implements OnInit {
  Player: player = new player();
  TeamSel:team[]
  constructor(private pService: playerServices, private tService: teamServices) { }

  ngOnInit(): void {
    this.tService.getTeam()
    .subscribe((data: any) => {
      this.TeamSel=data as team[]
});
  }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Player ={
      username: "",
      password: "",
      fName: "",
      lName: "",
      age: 0,
      tName: "",
      number: 0,
      position: ""
    }
  }

  OnSubmit(form: NgForm){
    this.pService.postPlayer(this.Player)
    .subscribe((data: any)=>{
      this.ResetForm();
    });
  }
}
