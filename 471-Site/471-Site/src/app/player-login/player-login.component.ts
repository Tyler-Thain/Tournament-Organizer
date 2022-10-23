import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { player } from '../classes/player.model';
import { playerServices } from '../services/playerServices.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-player-login',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #playerLoginForm ="ngForm" (ngSubmit) ="OnSubmit(playerLoginForm)">
    Login
      <div class="field">
        <label class="label">
        Username
        </label>
        <div class="control">
          <input class="input" type="username" placeholder="e.g. Dacard45" name="username" #username="ngModel" [(ngModel)]="Player.username" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Password
        </label>
        <div class="control">
          <input class="input" type="password" placeholder="e.g. cool password" name="password" #password="ngModel" [(ngModel)]="Player.password" required>
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
      background-image: url('/assets/Images/PlayerLoginCelebrate.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class PlayerLoginComponent implements OnInit {
  Player:player = new player();
  pCred: player[]
  constructor(private pService: playerServices, private route:Router) { }

  ngOnInit(): void {
  }
  OnSubmit(form : NgForm){
    this.pService.playerLogin(this.Player.username, this.Player.password)
      .subscribe((data)  =>  
        {
          this.pCred = data as player[];
          if(this.pCred[0].username == this.Player.username){
               if(this.pCred[0].password == this.Player.password){
                this.route.navigate(['/loggedplayer'])
              }
            }
        });
  }
}
