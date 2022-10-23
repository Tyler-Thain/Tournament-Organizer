import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { tournament } from "../classes/tournament.model";


@Injectable()
export class tournamentServices{
    constructor(private http: HttpClient){}

    deleteTournament(TID: number){
        return this.http.delete(`http://localhost:5131/api/Tournament/${TID}`)
    }

    updateTournament(id: number, name: string, startDate: string, endDate: string, username: string, parkID: number, sport: string){
        const body: tournament = {
            id: id,
            name: name,
            startDate: startDate,
            endDate: endDate,
            username: username,
            parkID: parkID,
            sport: sport
        }
        return this.http.put(`http://localhost:5131/api/Tournament/${id}`, body)
    }

    postTournament(Tournament: tournament){
        const body: tournament = {
            id: Tournament.id,
            name: Tournament.name,
            startDate: Tournament.startDate,
            endDate: Tournament.endDate,
            username: Tournament.username,
            parkID: Tournament.parkID,
            sport: Tournament.sport
        } 
        return this.http.post(`http://localhost:5131/api/Tournament`, body)
    }

    getTournaments(){
        return this.http.get(`http://localhost:5131/api/Tournament`)
    }
}