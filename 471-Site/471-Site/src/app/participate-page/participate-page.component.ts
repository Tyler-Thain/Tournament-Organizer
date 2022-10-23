import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participate-page',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/participateView">
        View Participation
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/participateAdd">
        Add Participation
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/participateDelete">
        Delete Participation
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
      background-image: url('/assets/Images/participate.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class ParticipatePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
