import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/refereeView">
        View Referee
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/refereeAdd">
        Add Referee
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/refereeUpdate">
        Edit Referee
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/refereeDelete">
        Delete Referee
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
    background-image: url('/assets/Images/Referee.png') !important;
    background-size: cover;
    background-position: center center;
  }
  `
  ]
})
export class RefereeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
