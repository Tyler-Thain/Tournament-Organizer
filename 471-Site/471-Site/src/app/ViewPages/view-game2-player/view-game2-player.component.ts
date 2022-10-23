import { Component, OnInit } from '@angular/core';
import { game } from 'src/app/classes/game.model';
import { gameServices } from 'src/app/services/gameServices.service';
import { tournIDGamePlayer } from '../view-game1-player/view-game1-player.component';
@Component({
  selector: 'app-view-game2-player',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewGameForm = "ngForm">
    View Games In Tournament
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>Game ID</th>
          <th>Day</th>
          <th>Month</th>
          <th>Year</th>
          <th>Time</th>
          <th>Tournament ID</th>
          <th>Home Team Name</th>
          <th>Away Team Name</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let Game of Game">
        <td><span>{{Game.gameID}}</span></td>
        <td><span>{{Game.day}}</span></td>
        <td><span>{{Game.month}}</span></td>
        <td><span>{{Game.year}}</span></td>
        <td><span>{{Game.time}}</span></td>
        <td><span>{{Game.tid}}</span></td>
        <td><span>{{Game.hName}}</span></td>
        <td><span>{{Game.aName}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/gamePlayerLanding">
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
      background-image: url('/assets/Images/game.jpeg') !important;
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
export class ViewGame2PlayerComponent implements OnInit {
  Game:game[]
  constructor(private gService:gameServices) { }

  ngOnInit(): void {
    this.gService.getGameByTournament(tournIDGamePlayer)
      .subscribe((data: any) => {
        this.Game=data as game[]
  });
  }

}
