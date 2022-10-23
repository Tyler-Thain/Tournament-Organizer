import { Component, OnInit } from '@angular/core';
import { tournament } from 'src/app/classes/tournament.model';
import { tournamentServices } from 'src/app/services/tournamentServices.service';

@Component({
  selector: 'app-view-tournament-player',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewTournamentForm = "ngForm">
    View All Tournaments
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>TID</th>
          <th>Name</th>
          <th>Sport</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Username</th>
          <th>Park ID</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let Tournament of Tournament">
        <td><span>{{Tournament.id}}</span></td>
        <td><span>{{Tournament.name}}</span></td>
        <td><span>{{Tournament.sport}}</span></td>
        <td><span>{{Tournament.startDate}}</span></td>
        <td><span>{{Tournament.endDate}}</span></td>
        <td><span>{{Tournament.username}}</span></td>
        <td><span>{{Tournament.parkID}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
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
      background-image: url('/assets/Images/Tournamentpage.jpg') !important;
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
export class ViewTournamentPlayerComponent implements OnInit {
  Tournament: tournament[];
  constructor(private tService: tournamentServices) { }

  ngOnInit(): void {
    this.tService.getTournaments()
      .subscribe((data: any) => {
        this.Tournament=data as tournament[]
  });
  }

}
