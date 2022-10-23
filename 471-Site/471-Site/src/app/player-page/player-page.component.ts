import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-page',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/playerLanding">
        View Player
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/playerAdd">
        Add Player
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/playerUpdate">
        Edit Player
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/playerDelete">
        Delete Player
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
      background-image: url('/assets/Images/player.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class PlayerPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
