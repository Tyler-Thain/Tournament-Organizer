import { Component, OnInit } from '@angular/core';
import { coach } from 'src/app/classes/coach.model';
import { coachServices } from 'src/app/services/coachServices.service';
import { NgForm } from '@angular/forms';
import { team } from 'src/app/classes/team.model';
import { teamServices } from 'src/app/services/teamServices.service';
@Component({
  selector: 'app-add-coach',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #AddCoachForm = "ngForm" (ngSubmit) = "OnSubmit(AddCoachForm)">
    Add Coach
        <div class="field">
        <label class="label">
        Enter a New Coach SIN
        </label>
        <div class="control">
          <input class="input" type="sin" placeholder="e.g 123-456-789" name="sin" #sin="ngModel" [(ngModel)]="Coach.sin" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        First Name
        </label>
        <div class="control">
          <input class="input" type="fName" placeholder="e.g Michael" name="fName" #fName="ngModel" [(ngModel)]="Coach.fName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Last Name
        </label>
        <div class="control">
          <input class="input" type="lName" placeholder="e.g Card" name="lName" #lName="ngModel" [(ngModel)]="Coach.lName" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Existing Team Name
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
export class AddCoachComponent implements OnInit {
  Coach: coach = new coach();
  TeamSel:team[];
  constructor(private cService: coachServices, private tService: teamServices) { }

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
  }
  OnSubmit(form: NgForm){
    this.cService.addCoach(this.Coach)
    .subscribe((data: any) =>{
      this.ResetForm();
    });
  }
}
