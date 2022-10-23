import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"; 
import { map, Observable } from "rxjs";
import { player } from "../classes/player.model";
import { HttpResponse } from "@angular/common/http";
import { tournamentOrganizer } from "../classes/tournamentOrganizer.model";
import { TournamentOrganizerLoginComponent } from "../tournament-organizer-login/tournament-organizer-login.component";

@Injectable()
export class toServices{
    constructor(private http: HttpClient){}

    readonly baseURL = 'http://localhost:5131/api/TournamentOrganizer'
    toLoginCred : tournamentOrganizer = new tournamentOrganizer()

    postTournamentOrganizer(TournamentOrganizer : tournamentOrganizer){
        const body: tournamentOrganizer = {
            username : TournamentOrganizer.username,
            password : TournamentOrganizer.password,
            fName : TournamentOrganizer.fName,
            lName : TournamentOrganizer.lName
        }
        return this.http.post(this.baseURL, body);
    }

    toLogin(Username : string, Password : string){
        console.log(`http://localhost:5131/api/TournamentOrganizer/${Username}/${Password}`)
        return this.http.get(`http://localhost:5131/api/TournamentOrganizer/${Username}/${Password}`)
        
    }
    getUser(){
        return this.http.get(`http://localhost:5131/api/TournamentOrganizer`)
    }
}