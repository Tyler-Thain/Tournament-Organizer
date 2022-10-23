import { Component, OnInit } from '@angular/core';
import { participateIn } from 'src/app/classes/participateIn.model';
import { participateServices } from 'src/app/services/participateServices.service';

@Component({
  selector: 'app-view-participation',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewParticipateForm = "ngForm">
    View Participations
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Tournament ID</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let Participation of Participation">
        <td><span>{{Participation.tName}}</span></td>
        <td><span>{{Participation.tid}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/participatePage">
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
      background-image: url('/assets/Images/participate.jpg') !important;
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
export class ViewParticipationComponent implements OnInit {
  Participation:participateIn[]
  constructor(private pService: participateServices) { }

  ngOnInit(): void {
    this.pService.getParticipateIn()
    .subscribe((data: any) => {
      this.Participation=data as participateIn[]
});
  }

}
