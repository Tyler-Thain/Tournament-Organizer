import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-page',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/teamLanding">
        View Teams
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/teamAdd">
        Add Team
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/teamUpdate">
        Edit Team
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/teamDelete">
        Delete Team
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
    .hero {
      background-image: url('/assets/Images/team.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class TeamPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
