import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/gameLanding">
        View Game
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/gameAdd">
        Add Game
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink ="/gameUpdate">
        Edit Game
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink ="/gameDelete">
        Delete Game
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
    background-image: url('/assets/Images/game.jpeg') !important;
    background-size: cover;
    background-position: center center;
  }
  `
  ]
})
export class GamePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
