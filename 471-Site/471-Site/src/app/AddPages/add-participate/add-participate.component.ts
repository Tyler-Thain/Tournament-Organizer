import { Component, OnInit } from '@angular/core';
import { participateIn } from 'src/app/classes/participateIn.model';
import { participateServices } from 'src/app/services/participateServices.service';
import { NgForm } from '@angular/forms';
import { tournamentServices } from 'src/app/services/tournamentServices.service';
import { tournament } from 'src/app/classes/tournament.model';
import { teamServices } from 'src/app/services/teamServices.service';
import { team } from 'src/app/classes/team.model';
@Component({
  selector: 'app-add-participate',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form #addParticipateForm = "ngForm" (ngSubmit) = "OnSubmit(addParticipateForm)">
    Add Particpation
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
    .hero {
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
export class AddParticipateComponent implements OnInit {
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
      tid: 0,
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
      this.pService.postParticipate(this.ParticipateIn)
      .subscribe((data: any)=>{
        this.ResetForm();
      });
    }
}
