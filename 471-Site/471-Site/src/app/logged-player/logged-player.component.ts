import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-player',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/playerTeamLanding">
        View Teams
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/playerFieldLanding">
        View Fields
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/pPlayer">
        View Players
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/gamePlayerLanding">
        View Games
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/playerSumLanding">
        View Game Summaries
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/tournamentPlayerView">
        Tournaments
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink ="/">
        Logout
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
      background-image: url('/assets/Images/LoggedPlayer.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class LoggedPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
