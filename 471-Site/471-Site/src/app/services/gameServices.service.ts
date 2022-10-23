import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { TeamPageComponent } from "../team-page/team-page.component";
import { JSDocTagName } from "@angular/compiler/src/output/output_ast";
import { game } from "../classes/game.model";



@Injectable()
export class gameServices{
    constructor(private http: HttpClient){}

    deleteGame(gameID: number){
        return this.http.delete(`http://localhost:5131/api/Game/${gameID}`)
    }

    updateGame(gameID: number, day: string, month: string, year: string, time: string, tid: number, hName: string, aName: string){
        const body: game = {
            gameID: gameID,
            day: day,
            month: month,
            year: year,
            time: time,
            tid: tid,
            hName: hName,
            aName: aName
        }
        return this.http.put(`http://localhost:5131/api/Game/${gameID}`, body)
    }

    postGame(Game: game){
        const body: game = {
            gameID: Game.gameID,
            day: Game.day,
            month: Game.month,
            year: Game.year,
            time: Game.time,
            tid: Game.tid,
            hName: Game.hName,
            aName: Game.aName
        }
        return this.http.post(`http://localhost:5131/api/Game`, body)
    }

    getGameByTournament(id: number){
        return this.http.get(`http://localhost:5131/api/Game/${id}`)
    }
    getGame(){
        return this.http.get(`http://localhost:5131/api/Game`)
    }
}