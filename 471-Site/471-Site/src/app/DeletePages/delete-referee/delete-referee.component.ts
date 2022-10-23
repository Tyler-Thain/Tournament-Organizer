import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { referee } from 'src/app/classes/referee.model';
import { refereeServices } from 'src/app/services/refereeServices.service';
@Component({
  selector: 'app-delete-referee',
  template: `
  <section class="hero is-bold is-fullheight">
  <div class="hero-body">
  <div class="container has-text-centered">
  <div class="box">
  <form novalidate #deleteRefereeForm = "ngForm" (ngSubmit) = "OnSubmit(deleteRefereeForm)">
    Referee Removal
        <div class="field">
        <label class="label">
        SIN
        </label>
        <select name ="rsin" #rsin ="ngModel" [(ngModel)]="Referee.sin">
        <option *ngFor="let r of RefereeSel" [value]="r.sin">
        {{r.sin}}
        </option>
      </select>
        </div>
        <div class="buttons">
        <button class="button is-primary is-fullwidth">
        Submit
        </button>
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
    select{
      text-align: center !important;
      width: 100%
    }
    `
  ]
})
export class DeleteRefereeComponent implements OnInit {
  Referee:referee = new referee();
  RefereeSel:referee[];
  constructor(private rService: refereeServices) { }

  ResetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.Referee = {
      sin: "",
      fName: "",
      lName: "",
      sport: "",
      gameID: 0
    }
  }

  ngOnInit(): void {
    this.rService.getReferees()
.subscribe((data: any) => {
  this.RefereeSel=data as referee[]
});
  }

  OnSubmit(form: NgForm){
    console.log(this.Referee.sin);
    this.rService.deleteReferee(this.Referee.sin)
      .subscribe((date: any) => {
        this.ResetForm()
      });
  }

}
