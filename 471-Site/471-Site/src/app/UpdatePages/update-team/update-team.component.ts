import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { team } from 'src/app/classes/team.model';
import { teamServices } from 'src/app/services/teamServices.service';
@Component({
  selector: 'app-update-team',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #updateTeamForm = "ngForm" (ngSubmit) = "OnSubmit(updateTeamForm)">
    Team Update
        <div class="field">
        <label class="label">
        Enter an Existing Team Name
        </label>
        <select name ="tid" #tid ="ngModel" [(ngModel)]="Team.name">
        <option *ngFor="let t of TeamSel" [value]="t.name">
        {{t.name}}
        </option>
      </select>
        </div>
        <div class="field">
        <label class="label">
        New Amount of Players
        </label>
        <div class="control">
          <input class="input" type="noPlayers" placeholder="e.g 20" name ="noPlayers" #noPlayers="ngModel" [(ngModel)] = "Team.noPlayers" required>
        </div>
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
export class UpdateTeamComponent implements OnInit {
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
    console.log(this.Team.name, this.Team.noPlayers);
    this.tService.updateTeam(this.Team.name, this.Team.noPlayers)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
