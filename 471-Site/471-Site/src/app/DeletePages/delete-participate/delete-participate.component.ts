import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { participateIn } from 'src/app/classes/participateIn.model';
import { team } from 'src/app/classes/team.model';
import { tournament } from 'src/app/classes/tournament.model';
import { participateServices } from 'src/app/services/participateServices.service';
import { teamServices } from 'src/app/services/teamServices.service';
import { tournamentServices } from 'src/app/services/tournamentServices.service';
@Component({
  selector: 'app-delete-participate',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #deleteParticipateForm = "ngForm" (ngSubmit) = "OnSubmit(deleteParticipateForm)">
    Participation Removal
        <div class="field">
        <label class="label">
        Team Name
        </label>
        <select name ="tid" #tid ="ngModel" [(ngModel)]="ParticipateIn.tName">
          <option *ngFor="let t of TeamSel" [value]="t.name">
          {{t.name}}
          </option>
        </select>
        </div>
        <div class="field">
        <label class="label">
        Tournament ID
        </label>
        <select name ="tid" #tid ="ngModel" [(ngModel)]="ParticipateIn.tid">
        <option *ngFor="let t of TournamentSel" [value]="t.id">
        {{t.id}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
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
    select{
      text-align: center !important;
      width: 100%
    }
    `
  ]
})
export class DeleteParticipateComponent implements OnInit {
  ParticipateIn: participateIn = new participateIn();
  TournamentSel:tournament[];
  TeamSel:team[];
  constructor(private pService: participateServices, private tService:tournamentServices,
    private teService:teamServices) { }


  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.ParticipateIn = {
      tName: "",
      tid: 0
    }
  }

  ngOnInit(): void {
    this.tService.getTournaments()
    .subscribe((data: any) => {
      this.TournamentSel=data as tournament[]
});
this.teService.getTeam()
.subscribe((data: any) => {
  this.TeamSel=data as team[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.ParticipateIn.tName, this.ParticipateIn.tid);
    this.pService.deleteParticipate(this.ParticipateIn.tName, this.ParticipateIn.tid)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
