import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournamentpage',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/tournamentView">
        View Tournament
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/tournamentAdd">
        Add Tournament
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/tournamentUpdate">
        Edit Tournament
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/tournamentDelete">
        Delete Tournament
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/loggedTO">
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
      background-image: url('/assets/Images/Tournamentpage.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class TournamentpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
