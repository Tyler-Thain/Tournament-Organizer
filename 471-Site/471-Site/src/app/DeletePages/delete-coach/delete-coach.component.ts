import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { coach } from 'src/app/classes/coach.model';
import { coachServices } from 'src/app/services/coachServices.service';

@Component({
  selector: 'app-delete-coach',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #deleteCoachForm = "ngForm" (ngSubmit) = "OnSubmit(deleteCoachForm)">
    Coach Removal
        <div class="field">
        <label class="label">
        SIN
        </label>
        <select name ="cSin" #cSin ="ngModel" [(ngModel)]="Coach.sin">
        <option *ngFor="let c of CoachSel" [value]="c.sin">
        {{c.sin}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/coachPage">
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
      background-image: url('/assets/Images/Coach.jpg') !important;
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
export class DeleteCoachComponent implements OnInit {
  Coach: coach = new coach()
  CoachSel:coach[];
  constructor(private cService: coachServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Coach = {
      sin: "",
      fName: "",
      lName: "",
      tName: ""
    }
  }

  ngOnInit(): void {
    this.cService.getCoaches()
.subscribe((data: any) => {
  this.CoachSel=data as coach[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.Coach.sin);
    this.cService.deleteCoach(this.Coach.sin)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
