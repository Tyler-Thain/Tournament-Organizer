import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { team } from 'src/app/classes/team.model';
import { teamServices } from 'src/app/services/teamServices.service';
@Component({
  selector: 'app-delete-team',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #deleteTeamForm = "ngForm" (ngSubmit) = "OnSubmit(deleteTeamForm)">
    Team Removal
        <div class="field">
        <label class="label">
        Name
        </label>
        <select name ="tid" #tid ="ngModel" [(ngModel)]="Team.name">
        <option *ngFor="let t of TeamSel" [value]="t.name">
        {{t.name}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/teamPage">
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
      background-image: url('/assets/Images/team.jpg') !important;
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
export class DeleteTeamComponent implements OnInit {
  Team:team = new team();
  TeamSel:team[];
  constructor(private tService: teamServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Team = {
      name: "",
      noPlayers: 0
    }
  }

  ngOnInit(): void {
    this.tService.getTeam()
    .subscribe((data: any) => {
      this.TeamSel=data as team[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.Team.name);
    this.tService.deleteTeam(this.Team.name)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
