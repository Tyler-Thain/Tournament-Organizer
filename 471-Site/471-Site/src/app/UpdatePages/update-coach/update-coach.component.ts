import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { coach } from 'src/app/classes/coach.model';
import { team } from 'src/app/classes/team.model';
import { coachServices } from 'src/app/services/coachServices.service';
import { teamServices } from 'src/app/services/teamServices.service';
@Component({
  selector: 'app-update-coach',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #updateCoachForm = "ngForm" (ngSubmit) = "OnSubmit(updateCoachForm)">
    Coach Update
        <div class="field">
        <label class="label">
        Enter an Existing Coach sin
        </label>
        <select name ="cSin" #cSin ="ngModel" [(ngModel)]="Coach.sin">
        <option *ngFor="let c of CoachSel" [value]="c.sin">
        {{c.sin}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        New First Name
        </label>
        <div class="control">
          <input class="input" type="fName" placeholder="e.g Michael" name="fName" #fName="ngModel" [(ngModel)]="Coach.fName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Last Name
        </label>
        <div class="control">
          <input class="input" type="lName" placeholder="e.g Card" name="lName" #lName="ngModel" [(ngModel)]="Coach.lName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        New Existing Team Name
        </label>
        <select name ="tid" #tid ="ngModel" [(ngModel)]="Coach.tName">
        <option *ngFor="let t of TeamSel" [value]="t.name">
        {{t.name}}
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
export class UpdateCoachComponent implements OnInit {
  Coach:coach = new coach();
  TeamSel:team[];
  CoachSel:coach[];
  constructor(private cService: coachServices, private tService:teamServices) { }

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
    this.tService.getTeam()
    .subscribe((data: any) => {
      this.TeamSel=data as team[]
});
this.cService.getCoaches()
.subscribe((data: any) => {
  this.CoachSel=data as coach[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.Coach.sin, this.Coach.fName, this.Coach.lName, this.Coach.tName);
    this.cService.updateCoach(this.Coach.sin, this.Coach.fName, this.Coach.lName, this.Coach.tName)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
