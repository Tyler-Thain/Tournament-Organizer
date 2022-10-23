import { Component, OnInit } from '@angular/core';
import { referee } from 'src/app/classes/referee.model';
import { refereeServices } from 'src/app/services/refereeServices.service';

@Component({
  selector: 'app-view-referee',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewRefereeForm = "ngForm">
    View All Coaches
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>SIN</th>
          <th>Sport</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Game ID</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let Referee of Referee">
        <td><span>{{Referee.sin}}</span></td>
        <td><span>{{Referee.sport}}</span></td>
        <td><span>{{Referee.fName}}</span></td>
        <td><span>{{Referee.lName}}</span></td>
        <td><span>{{Referee.gameID}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/refereePage">
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
      background-image: url('/assets/Images/Referee.png') !important;
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
export class ViewRefereeComponent implements OnInit {
  Referee:referee[]
  constructor(private rService:refereeServices) { }

  ngOnInit(): void {
    this.rService.getReferees()
      .subscribe((data: any) => {
        this.Referee=data as referee[]
  });
  }

}
