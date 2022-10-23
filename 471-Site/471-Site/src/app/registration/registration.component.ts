import { Component, OnInit } from '@angular/core';
import { player } from '../classes/player.model';
import { FormsModule, NgForm} from '@angular/forms';
import { PlayerLoginComponent } from '../player-login/player-login.component';
import { playerServices } from '../services/playerServices.service';
@Component({
  selector: 'app-registration',
  template: `
  <div class="navbar is-dark is-bold">
  <div class="navbar-brand">
    <a class="navbar-item">
    Tournament Builder
    </a>
  </div>
</div>
<section class="hero is-bold is-fullheight">
<div class="hero-body">
<div class="container has-text-centered">
<div class="box">
<form novalidate #playerRegisterForm ="ngForm" (ngSubmit) ="OnSubmit(playerRegisterForm)">
  Sign-Up
    <div class="field">
      <label class="label">
      New Username
      </label>
      <div class="control">
        <input class="input" type="username" placeholder="e.g. Dacard45" name ="username" #username ="ngModel" [(ngModel)]="player.username" required>
      </div>
      </div>
      <div class="field">
      <label class="label">
      New Password
      </label>
      <div class="control">
        <input class="input" type="password" placeholder="e.g. cool password" name="password" #password ="ngModel" [(ngModel)]="player.password" required>
      </div>
      </div>
      <div class="field">
      <label class="label">
      First Name
      </label>
      <div class="control">
        <input class="input" type="FName" placeholder="e.g. Mike" name="fName" #fName="ngModel" [(ngModel)]="player.fName" required>
      </div>
      </div>
      <div class="field">
      <label class="label">
      Last Name
      </label>
      <div class="control">
        <input class="input" type="LName" placeholder="e.g. Smith" name="lName" #lName="ngModel" [(ngModel)]="player.lName" required>
      </div>
      </div>
      <div class="field">
      <label class="label">
      Age
      </label>
      <div class="control">
        <input class="input" type="Age" placeholder="e.g. 18" name="age" #age="ngModel" [(ngModel)]="player.age" required>
      </div>
      </div>
      <div class="field">
      <label class="label">
      Number
      </label>
      <div class="control">
        <input class="input" type="Number" placeholder="e.g. 12" name="number" #number="ngModel" [(ngModel)]="player.number" required>
      </div>
      </div>
      <div class="field">
      <label class="label">
      Team Name
      </label>
      <div class="control">
        <input class="input" type="TName" placeholder="e.g. Flames" name="tName" #tName="ngModel" [(ngModel)]="player.tName" required>
      </div>
      <div class="field">
      <label class="label">
      Position
      </label>
        <input class="input" type="Position" placeholder="e.g. Small Forward" name="position" #position="ngModel" [(ngModel)]="player.position" required>
      </div>
      </div>
      <div class="buttons">
      <button class="button is-primary is-pulled-left" routerLink="/" type="button">
      Back
      </button>
      <button class="button is-primary is-pulled-right" type="Submit">
      Submit
      </button>
      </div>
  </form>
</div>
</div>
</div>
  `,
  styles: [
    ` 
    .hero {
      background-image: url('/assets/Images/PlayerRegister.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class RegistrationComponent implements OnInit {
  player:player = new player()
  constructor(private playerRegistration: playerServices) { }

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.player ={
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

  OnSubmit(form: NgForm){
    alert(this.player.username);
    
    this.playerRegistration.postPlayer(this.player)
    .subscribe((data: any)=>{
      this.resetForm();
    });
  }
}
