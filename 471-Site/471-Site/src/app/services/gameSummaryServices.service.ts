import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { gameSummary } from "../classes/gameSummary.model";



@Injectable()
export class gameSummaryServices{
    constructor(private http: HttpClient){}

    deleteGameSummary(score: string, gameID: number){
        return this.http.delete(`http://localhost:5131/api/GameSummary/${score}/${gameID}`)
    }

    updateGameSummary(score: string, gameID: number, winner: string, loser: string){
        const body: gameSummary = {
            score: score,
            gameID: gameID,
            winner: winner,
            loser: loser
        }
        return this.http.put(`http://localhost:5131/api/GameSummary/${score}/${gameID}`, body)
    }

    postGameSummary(GameSummary: gameSummary){
        const body: gameSummary = {
            score: GameSummary.score,
            gameID: GameSummary.gameID,
            winner: GameSummary.winner,
            loser: GameSummary.loser
        }
        return this.http.post(`http://localhost:5131/api/GameSummary`, body)
    }

    getGameSummaryByTournament(id: number){
        return this.http.get(`http://localhost:5131/api/GameSummary/${id}`)
    }
    getGameSummary(){
        return this.http.get(`http://localhost:5131/api/GameSummary`)
    }
}