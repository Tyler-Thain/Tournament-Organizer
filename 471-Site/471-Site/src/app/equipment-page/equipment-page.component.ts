import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-page',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" type="button" routerLink="/equipmentView">
        View Equipment
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/equipmentAdd">
        Add Equipment
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink="/equipmentUpdate">
        Edit Equipment
        </button>
        <button class="button is-primary is-fullwidth" type="button" routerLink ="/equipmentDelete">
        Delete Equipment
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
    background-image: url('/assets/Images/equipment.jpg') !important;
    background-size: cover;
    background-position: center center;
  }
  `
  ]
})
export class EquipmentPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
