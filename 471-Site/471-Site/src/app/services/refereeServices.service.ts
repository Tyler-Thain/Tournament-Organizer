import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { referee } from "../classes/referee.model";



@Injectable()
export class refereeServices{
    constructor(private http: HttpClient){}

    deleteReferee(sin: string){
        return this.http.delete(`http://localhost:5131/api/Referee/${sin}`)
    }

    updateReferee(sin: string, sport: string, fName: string, lName: string, gameID: number){
        const body: referee = {
            sin: sin,
            sport: sport,
            fName: fName,
            lName: lName,
            gameID: gameID
        }
        return this.http.put(`http://localhost:5131/api/Referee/${sin}`, body)
    }
    postReferee(Referee: referee){
        const body: referee = {
            sin: Referee.sin,
            sport: Referee.sport,
            fName: Referee.fName,
            lName: Referee.lName,
            gameID: Referee.gameID
        }
        return this.http.post(`http://localhost:5131/api/Referee`, body)
    }

    getReferees(){
        return this.http.get(`http://localhost:5131/api/Referee`)
    }
}