import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { player } from "../classes/player.model";
import { HttpResponse } from "@angular/common/http";

@Injectable()
export class playerServices{

    constructor(private http: HttpClient){

    }

    

    readonly baseURL = 'http://localhost:5131/api/Player'
    
    postPlayer(Player : player){
        const body: player ={
            username: Player.username,
            password: Player.password,
            fName: Player.fName,
            lName: Player.lName,
            age: Player.age,
            number: Player.number,
            position: Player.position,
            tName: Player.tName
          }
        return this.http.post(this.baseURL, body);
    }   

    deletePlayer(Username: string){
        return this.http.delete(`http://localhost:5131/api/Player/${Username}`)
    }

    updatePlayer(Username: string, Password: string, FName: string, LName: string, Age: number, Number: number, Position: string, TName: string){
        const body: player = {
            username: Username,
            password: Password,
            fName: FName,
            lName: LName,
            age: Age,
            number: Number,
            position: Position,
            tName: TName
        }
        return this.http.put(`http://localhost:5131/api/Player/${Username}`, body)

    }

    getPlayerByUsername(Username: string){
        return this.http.get(`http://localhost:5131/api/Player/${Username}`)
    }

    getPlayerByTeam(TName: string){
        return this.http.get(`http://localhost:5131/api/Player/onTeam/${TName}`)
    }

    playerLogin(Username: string, Password: string){
        return this.http.get(`http://localhost:5131/api/Player/${Username}/${Password}`);
    }
    getPlayer(){
        return this.http.get(`http://localhost:5131/api/Player`)
    }
}