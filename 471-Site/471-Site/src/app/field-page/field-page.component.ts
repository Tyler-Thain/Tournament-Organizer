import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-page',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/fieldViewLanding">
        View Field
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/fieldAdd">
        Add Field
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/fieldUpdate">
        Edit Field
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/fieldDelete">
        Delete Field
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
    background-image: url('/assets/Images/fieldpage.jpg') !important;
    background-size: cover;
    background-position: center center;
  }
  `
  ]
})
export class FieldPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
