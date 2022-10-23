import { Component, OnInit } from '@angular/core';
import { team } from 'src/app/classes/team.model';
import { teamServices } from 'src/app/services/teamServices.service';
import { tournIDTeam } from '../view-team1/view-team1.component';

@Component({
  selector: 'app-view-team2',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewTeamForm = "ngForm">
    View Teams In Tournament
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Number of Players</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let Team of Team">
        <td><span>{{Team.name}}</span></td>
        <td><span>{{Team.noPlayers}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/teamLanding">
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
      background-image: url('/assets/Images/gamesum.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    table{
      text-align: center !important;
      width: 100%
    }
    `
  ]
})
export class ViewTeam2Component implements OnInit {
  Team:team[]
  constructor(private tService: teamServices) { }

  ngOnInit(): void {
    this.tService.getTeamsByTournament(tournIDTeam)
    .subscribe((data: any) => {
      this.Team=data as team[]
});
  }

}
