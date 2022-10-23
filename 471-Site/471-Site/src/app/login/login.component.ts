import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/playerLogin" type="button">
        Player Login
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/registration"type="button">
        Register Player
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/tournamentLogin"type="button">
        Tournament Organizer Login
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/registrationTO"type="button">
        Tournament Organizer Registration
        </button>
        </div>
    </form>
  </div>
  </div>
  </div>
</section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/Images/SportsLogin.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
