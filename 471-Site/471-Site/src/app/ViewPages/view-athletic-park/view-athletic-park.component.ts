import { Component, OnInit } from '@angular/core';
import { athleticPark } from 'src/app/classes/athleticPark.model';
import { athleticParkServices } from 'src/app/services/athleticParkServices.service';

@Component({
  selector: 'app-view-athletic-park',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewAthleticParkForm = "ngForm">
    View All Athletic Parks
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>Park ID</th>
          <th>Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let AthleticPark of AthleticPark">
        <td><span>{{AthleticPark.parkID}}</span></td>
        <td><span>{{AthleticPark.name}}</span></td>
        <td><span>{{AthleticPark.address}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/Aparkpage">
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
      background-image: url('/assets/Images/AthleticPark.jpg') !important;
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
export class ViewAthleticParkComponent implements OnInit {
  AthleticPark:athleticPark[]
  constructor(private aService: athleticParkServices) { }

  ngOnInit(): void {
    this.aService.getAthleticParks()
      .subscribe((data: any) => {
        this.AthleticPark=data as athleticPark[]
  });
  }
}
