import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { tournamentOrganizer } from '../classes/tournamentOrganizer.model';
import { toServices } from '../services/toServices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tournament-organizer-login',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #toLoginForm = "ngForm" (ngSubmit) = "OnSubmit(toLoginForm)">
    Login
      <div class="field">
        <label class="label">
        Username
        </label>
        <div class="control">
          <input class="input" type="username" placeholder="e.g. Dacard45" name = "username" #username = "ngModel" [(ngModel)] = "TournamentOrganizer.username">
        </div>
        </div>
        <div class="field">
        <label class="label">
        Password
        </label>
        <div class="control">
          <input class="input" type="password" placeholder="e.g. cool password" name = "password" #password = "ngModel" [(ngModel)] = "TournamentOrganizer.password">
        </div>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Login
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/">
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
      background-image: url('/assets/Images/TournamentLogin.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class TournamentOrganizerLoginComponent implements OnInit {
  TournamentOrganizer : tournamentOrganizer = new tournamentOrganizer()
  toCred : tournamentOrganizer[];

  constructor(public toService : toServices, private route:Router) { }

  ngOnInit(): void {
    
  }

  OnSubmit(form : NgForm){
    this.toService.toLogin(this.TournamentOrganizer.username, this.TournamentOrganizer.password)
      .subscribe((data)  =>  
        {
          this.toCred = data as tournamentOrganizer[];
          if(this.toCred[0].username == this.TournamentOrganizer.username){
               if(this.toCred[0].password == this.TournamentOrganizer.password){
                this.route.navigate(['/loggedTO'])
              }
            }
        });
  }

}
