import { Component, OnInit } from '@angular/core';
import { gameSummary } from 'src/app/classes/gameSummary.model';
import { gameSummaryServices } from 'src/app/services/gameSummaryServices.service';
import { tournIDGameSumPlayer } from '../view-gamesum1-player/view-gamesum1-player.component';
@Component({
  selector: 'app-view-gamesum2-player',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewGSumPlayerForm = "ngForm">
    View Game Summaries In Tournament
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>Score</th>
          <th>Game ID</th>
          <th>Winner</th>
          <th>Loser</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let GameSummary of GameSummary">
        <td><span>{{GameSummary.score}}</span></td>
        <td><span>{{GameSummary.gameID}}</span></td>
        <td><span>{{GameSummary.winner}}</span></td>
        <td><span>{{GameSummary.loser}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/playerSumLanding">
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
export class ViewGamesum2PlayerComponent implements OnInit {
  GameSummary:gameSummary[]
  constructor(private gsService:gameSummaryServices) { }

  ngOnInit(): void {
    this.gsService.getGameSummaryByTournament(tournIDGameSumPlayer)
    .subscribe((data: any) => {
      this.GameSummary=data as gameSummary[]
});
  }

}
