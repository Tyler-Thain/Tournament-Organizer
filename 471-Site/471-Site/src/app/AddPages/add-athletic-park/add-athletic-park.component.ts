import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { athleticPark } from 'src/app/classes/athleticPark.model';
import { athleticParkServices } from 'src/app/services/athleticParkServices.service';
@Component({
  selector: 'app-add-athletic-park',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #addAthleticParkForm = "ngForm" (ngSubmit) = "OnSubmit(addAthleticParkForm)">
    Add Athletic Park
        <div class="field">
        <label class="label">
        Enter a New ParkID
        </label>
        <div class="control">
          <input class="input" type="parkID" placeholder="e.g 5" name="parkID" #parkID="ngModel" [(ngModel)]="AthleticPark.parkID" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Name
        </label>
        <div class="control">
          <input class="input" type="name" placeholder="e.g Centenial Park" name="name" #name="ngModel" [(ngModel)]="AthleticPark.name" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Address
        </label>
        <div class="control">
          <input class="input" type="address" placeholder="e.g 123 Cool St." name="address" #address="ngModel" [(ngModel)]="AthleticPark.address" required>
        </div>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/Aparkpage">
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
      background-image: url('/assets/Images/AthleticPark.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class AddAthleticParkComponent implements OnInit {
  AthleticPark:athleticPark = new athleticPark();
  constructor(private apService: athleticParkServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.AthleticPark = {
      parkID: 0,
      name: "",
      address: ""
    }
  }
  ngOnInit(): void {
  }
  OnSubmit(form: NgForm){
    this.apService.postAthleticPark(this.AthleticPark)
    .subscribe((data: any)=>{
      this.ResetForm();
    });
  }
}
