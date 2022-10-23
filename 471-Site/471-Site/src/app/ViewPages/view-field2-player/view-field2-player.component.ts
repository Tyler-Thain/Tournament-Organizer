import { Component, OnInit } from '@angular/core';
import { field } from 'src/app/classes/field.model';
import { fieldServices } from 'src/app/services/fieldServices.service';
import { tournIDFieldPlayer } from '../view-field1-player/view-field1-player.component';
@Component({
  selector: 'app-view-field2-player',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewFieldForm = "ngForm">
    View Fields In Tournament
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>Field Number</th>
          <th>Game ID</th>
          <th>Park ID</th>
          <th>Sport</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let Field of Field">
        <td><span>{{Field.fieldNo}}</span></td>
        <td><span>{{Field.gameID}}</span></td>
        <td><span>{{Field.parkID}}</span></td>
        <td><span>{{Field.sport}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/playerFieldLanding">
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
      background-image: url('/assets/Images/fieldpage.jpg') !important;
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
export class ViewField2PlayerComponent implements OnInit {
  Field:field[]
  constructor(private fService: fieldServices) { }

  ngOnInit(): void {
    this.fService.getFieldByTournament(tournIDFieldPlayer)
    .subscribe((data: any) => {
      this.Field=data as field[]
  });
  }

}
