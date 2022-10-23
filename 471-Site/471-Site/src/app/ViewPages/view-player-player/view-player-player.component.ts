import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { team } from 'src/app/classes/team.model';
import { teamServices } from 'src/app/services/teamServices.service';

export var teamNamePlayer:string;
@Component({
  selector: 'app-view-player-player',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #landingPPlayerForm = "ngForm" (ngSubmit) = "OnSubmit(landingPPlayerForm)">
    Specific Team Roster
        <div class="field">
        <label class="label">
        Team Name
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
        <button class="button is-primary is-fullwidth" routerLink ="/loggedplayer">
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
      background-image: url('/assets/Images/player.jpg') !important;
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
export class ViewPlayerPlayerComponent implements OnInit {
  Team:team = new team();
  TeamSel:team[];
  constructor(private router: Router,private tService: teamServices) { }

  ngOnInit(): void {
    this.tService.getTeam()
    .subscribe((data: any) => {
      this.TeamSel=data as team[]
});
  }
  OnSubmit(fomr: NgForm){
    teamNamePlayer = this.Team.name;
    this.router.navigate(['/pPlayerView'])
  }
}
