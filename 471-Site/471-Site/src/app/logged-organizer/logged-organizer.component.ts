import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-organizer',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink= "/TournamentPage">
        Tournament
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/Aparkpage">
        Athletic Park
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/equipPage">
        Equipment
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/fieldPage">
        Field
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/gamePage">
        Game
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/gameSumPage">
        Game Summary
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/refereePage">
        Referee
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink ="/coachPage">
        Coach
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink ="/teamPage">
        Team
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink ="/playerPage">
        Player
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink ="/participatePage">
        Participate
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
  styles: [`
  .hero{
    background-image: url('/assets/Images/LoggedTO.jpg') !important;
    background-size: cover;
    background-position: center center;
  }
  `
  ]
})
export class LoggedOrganizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
