import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { team } from "../classes/team.model";



@Injectable()
export class teamServices{
    constructor(private http: HttpClient){}

    deleteTeam(TName: string){
        return this.http.delete(`http://localhost:5131/api/Team/${TName}`)
    }

    updateTeam(name: string, noPlayers: number){
        const body: team = {
            name: name,
            noPlayers: noPlayers
        }
        return this.http.put(`http://localhost:5131/api/Team/${name}`, body)
    }

    postTeam(Team: team){
        const body: team = {
            name: Team.name,
            noPlayers: Team.noPlayers
        }
        return this.http.post(`http://localhost:5131/api/Team`, body)
    }

    getTeamsByTournament(id: number){
        return this.http.get(`http://localhost:5131/api/Team/${id}`)
    }
    getTeam(){
         return this.http.get(`http://localhost:5131/api/Team`)
    }
}