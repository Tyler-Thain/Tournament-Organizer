import { Component, OnInit } from '@angular/core';
import { coach } from 'src/app/classes/coach.model';
import { coachServices } from 'src/app/services/coachServices.service';

@Component({
  selector: 'app-view-coach',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewCoachForm = "ngForm">
    View All Coaches
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>SIN</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Team Name</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let Coach of Coach">
        <td><span>{{Coach.sin}}</span></td>
        <td><span>{{Coach.fName}}</span></td>
        <td><span>{{Coach.lName}}</span></td>
        <td><span>{{Coach.tName}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/coachPage">
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
      background-image: url('/assets/Images/Coach.jpg') !important;
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
export class ViewCoachComponent implements OnInit {
  Coach:coach[]
  constructor(private cService:coachServices) { }

  ngOnInit(): void {
    this.cService.getCoaches()
      .subscribe((data: any) => {
        this.Coach=data as coach[]
  });
  }

}
