import { Component, OnInit } from '@angular/core';
import { tournamentOrganizer } from '../classes/tournamentOrganizer.model';
import { FormsModule, NgForm } from '@angular/forms';
import { toServices } from '../services/toServices.service';

@Component({
  selector: 'app-registration-to',
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
<form novalidate #toRegistrationForm = "ngForm" (ngSubmit) = "OnSubmit(toRegistrationForm)">
  Sign-Up
    <div class="field">
      <label class="label">
      New Username
      </label>
      <div class="control">
        <input class="input" type="username" placeholder="e.g. Dacard45" name = "username" #username = "ngModel" [(ngModel)] = "TournamentOrganizer.username" required>
      </div>
      </div>
      <div class="field">
      <label class="label">
      New Password
      </label>
      <div class="control">
        <input class="input" type="password" placeholder="e.g. cool password" name = "password" #password = "ngModel" [(ngModel)] = "TournamentOrganizer.password" required>
      </div>
      </div>
      <div class="field">
      <label class="label">
      First Name
      </label>
      <div class="control">
        <input class="input" type="FName" placeholder="e.g. Mike" name = "fName" #fName = "ngModel" [(ngModel)] = "TournamentOrganizer.fName" required>
      </div>
      </div>
      <div class="field">
      <label class="label">
      Last Name
      </label>
      <div class="control">
        <input class="input" type="LName" placeholder="e.g. Smith" name = "lName" #lName = "ngModel" [(ngModel)] = "TournamentOrganizer.lName" required>
      </div>
      </div>
      <div class="buttons">
      <button class="button is-primary is-pulled-left" routerLink="/" type="button">
      Back
      </button>
      <button class="button is-primary is-pulled-right">
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
      background-image: url('/assets/Images/TournamentReg.png') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class RegistrationTOComponent implements OnInit {
  TournamentOrganizer : tournamentOrganizer = new tournamentOrganizer()
  constructor(private toRegistration: toServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.TournamentOrganizer = {
      username: "",
      password: "",
      fName: "",
      lName: ""
    }
  }

  ngOnInit(): void {
    this.ResetForm();
  }

  OnSubmit(form : NgForm){
    alert(this.TournamentOrganizer.username);
    this.toRegistration.postTournamentOrganizer(this.TournamentOrganizer)
    .subscribe((data : any) => {
      this.ResetForm();
    });
  }

}
