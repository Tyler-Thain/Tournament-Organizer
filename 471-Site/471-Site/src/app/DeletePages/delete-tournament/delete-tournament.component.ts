import { Component, OnInit } from '@angular/core';
import { tournament } from 'src/app/classes/tournament.model';
import { tournamentServices } from 'src/app/services/tournamentServices.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete-tournament',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #tournamentDeleteForm = "ngForm" (ngSubmit) = "OnSubmit(tournamentDeleteForm)">
    Tournament Removal
        <div class="field">
        <label class="label">
        Tournament ID
        </label>
        <select name ="tid" #tid ="ngModel" [(ngModel)]="Tournament.id">
        <option *ngFor="let t of TournamentSel" [value]="t.id">
        {{t.id}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
        <button class="button is-primary is-fullwidth" routerLink ="/TournamentPage">
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
      background-image: url('/assets/Images/Tournamentpage.jpg') !important;
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
export class DeleteTournamentComponent implements OnInit {
  Tournament: tournament = new tournament()
  TournamentSel:tournament[];
  constructor(private tService: tournamentServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Tournament = {
      id: 0,
      name: "",
      sport: "",
      startDate: "",
      endDate: "",
      username: "",
      parkID: 0
    }
  }

  ngOnInit(): void {
    this.tService.getTournaments()
    .subscribe((data: any) => {
      this.TournamentSel=data as tournament[]
    });
  }

  OnSubmit(form: NgForm){
    console.log(this.Tournament.id);
    this.tService.deleteTournament(this.Tournament.id)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
