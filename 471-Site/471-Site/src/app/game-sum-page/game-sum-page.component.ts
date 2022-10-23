import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-sum-page',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/gameSumLanding">
        View Game Summary
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/gameSumAdd">
        Add Game Summary
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink ="/gameSumUpdate">
        Edit Game Summary
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/gameSumDelete">
        Delete Game Summary
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
  styles: [`
  .hero{
    background-image: url('/assets/Images/gamesum.jpg') !important;
    background-size: cover;
    background-position: center center;
  }
  `
  ]
})
export class GameSumPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
