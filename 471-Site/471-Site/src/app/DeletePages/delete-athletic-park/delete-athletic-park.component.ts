import { Component, OnInit } from '@angular/core';
import { athleticPark } from 'src/app/classes/athleticPark.model';
import { athleticParkServices } from 'src/app/services/athleticParkServices.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-athletic-park',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #athleticParkDeleteForm = "ngForm" (ngSubmit) = "OnSubmit(athleticParkDeleteForm)">
    Athletic Park Removal
        <div class="field">
        <label class="label">
        Park ID
        </label>
        <select name ="aid" #aid ="ngModel" [(ngModel)]="AthleticPark.parkID">
        <option *ngFor="let a of AthleticSel" [value]="a.parkID">
        {{a.parkID}}
        </option>
      </select>
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
    select{
      text-align: center !important;
      width: 100%
    }
    `
  ]
})
export class DeleteAthleticParkComponent implements OnInit {
  AthleticPark: athleticPark = new athleticPark()
  AthleticSel:athleticPark[];
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
    this.apService.getAthleticParks()
    .subscribe((data: any) => {
      this.AthleticSel=data as athleticPark[]
    });
  }

  OnSubmit(form: NgForm){
    console.log(this.AthleticPark.parkID);
    this.apService.deleteAthleticPark(this.AthleticPark.parkID)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
