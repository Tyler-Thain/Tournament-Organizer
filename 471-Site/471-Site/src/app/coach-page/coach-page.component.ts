import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-page',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/coachView">
        View Coach
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/coachAdd">
        Add Coach
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/coachUpdate">
        Edit Coach
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/coachDelete">
        Delete Coach
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
      background-image: url('/assets/Images/Coach.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class CoachPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
