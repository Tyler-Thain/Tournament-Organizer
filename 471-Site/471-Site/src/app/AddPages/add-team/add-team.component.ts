import { Component, OnInit } from '@angular/core';
import { team } from 'src/app/classes/team.model';
import { NgForm } from '@angular/forms';
import { teamServices } from 'src/app/services/teamServices.service';
@Component({
  selector: 'app-add-team',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #addTeamForm = "ngForm" (ngSubmit) = "OnSubmit(addTeamForm)">
    Add Team
        <div class="field">
        <label class="label">
        Enter a New Team Name
        </label>
        <div class="control">
          <input class="input" type="name" placeholder="e.g Flames" name ="name" #name="ngModel" [(ngModel)] = "Team.name" required>
        </div>
        </div>
        <div class="field">
        <label class="label">
        Amount of Players
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
    .hero {
      background-image: url('/assets/Images/team.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    `
  ]
})
export class AddTeamComponent implements OnInit {
  Team:team = new team();
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
  }

  OnSubmit(form: NgForm){
    this.tService.postTeam(this.Team)
    .subscribe((date: any) => {
      this.ResetForm()
    });
  }
}
