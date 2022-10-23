import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-athletic-park-page',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/aparkView">
        View Athletic Park
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/aparkAdd">
        Add Athletic Park
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/aparkUpdate">
        Edit Athletic Park
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/aparkDelete">
        Delete Athletic Park
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
    background-image: url('/assets/Images/AthleticPark.jpg') !important;
    background-size: cover;
    background-position: center center;
  }
  `
  ]
})
export class AthleticParkPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
