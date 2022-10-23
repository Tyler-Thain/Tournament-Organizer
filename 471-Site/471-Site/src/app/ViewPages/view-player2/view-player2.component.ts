import { Component, OnInit } from '@angular/core';
import { player } from 'src/app/classes/player.model';
import { playerServices } from 'src/app/services/playerServices.service';
import { teamName } from '../view-player/view-player.component';
@Component({
  selector: 'app-view-player2',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewPlayerForm = "ngForm">
    View Players On Team
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>Username</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Number</th>
          <th>Position</th>
          <th>Team Name</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let Player of Player">
        <td><span>{{Player.username}}</span></td>
        <td><span>{{Player.fName}}</span></td>
        <td><span>{{Player.lName}}</span></td>
        <td><span>{{Player.age}}</span></td>
        <td><span>{{Player.number}}</span></td>
        <td><span>{{Player.position}}</span></td>
        <td><span>{{Player.tName}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/playerLanding">
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
    table{
      text-align: center !important;
      width: 100%
    }
    `
  ]
})
export class ViewPlayer2Component implements OnInit {
  Player:player[]
  constructor(private pService: playerServices) { }

  ngOnInit(): void {
    this.pService.getPlayerByTeam(teamName)
    .subscribe((data: any) => {
      this.Player=data as player[]
});
  }

}
