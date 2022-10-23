import { Component, OnInit } from '@angular/core';
import { equipment } from 'src/app/classes/equipment.model';
import { equipmentServices } from 'src/app/services/equipmentServices.service';

@Component({
  selector: 'app-view-equipment',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #viewEquipmentForm = "ngForm">
    View All Equipment
    <table class = "table table-bordered table-striped">
      <thead>
        <tr>
          <th>Equipment ID</th>
          <th>Sport</th>
          <th>Park ID</th>
          <th>Game ID</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let Equipment of Equipment">
        <td><span>{{Equipment.equipID}}</span></td>
        <td><span>{{Equipment.sport}}</span></td>
        <td><span>{{Equipment.parkID}}</span></td>
        <td><span>{{Equipment.gameID}}</span></td>
        </tr>
      </tbody>
    </table>
        <div class="buttons">
        <button class="button is-primary is-fullwidth" routerLink ="/equipPage">
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
      background-image: url('/assets/Images/equipment.jpg') !important;
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
export class ViewEquipmentComponent implements OnInit {
  Equipment:equipment[]
  constructor(private eService: equipmentServices) { }

  ngOnInit(): void {
    this.eService.getEquipment()
      .subscribe((data: any) => {
        this.Equipment=data as equipment[]
  });
  }

}
