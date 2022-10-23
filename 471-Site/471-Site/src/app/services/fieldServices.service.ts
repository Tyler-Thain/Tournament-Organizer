import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { field } from "../classes/field.model";



@Injectable()
export class fieldServices{
    constructor(private http: HttpClient){}

    deleteField(fieldNo: number, gameID: number, parkID: number){
        return this.http.delete(`http://localhost:5131/api/Field/${fieldNo}/${gameID}/${parkID}`)
    }

    updateField(fieldNo: number, gameID: number, parkID: number, sport: string){
        const body: field = {
            fieldNo: fieldNo,
            gameID: gameID,
            parkID: parkID,
            sport: sport
        }
        return this.http.put(`http://localhost:5131/api/Field/${fieldNo}/${gameID}/${parkID}`, body)
    }
    postField(Field: field){
        const body: field = {
            fieldNo: Field.fieldNo,
            gameID: Field.gameID,
            parkID: Field.parkID,
            sport: Field.sport
        }
        return this.http.post(`http://localhost:5131/api/Field`, body)
    }

    getFieldByTournament(id: number){
        return this.http.get(`http://localhost:5131/api/Field/${id}`)
    }
    getField(){
        return this.http.get(`http://localhost:5131/api/Field`)
    }
}