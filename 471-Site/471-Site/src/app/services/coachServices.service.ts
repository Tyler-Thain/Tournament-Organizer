import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { coach } from "../classes/coach.model";



@Injectable()
export class coachServices{
    constructor(private http: HttpClient){}

    deleteCoach(sin: string){
        return this.http.delete(`http://localhost:5131/api/Coach/${sin}`)
    }

    updateCoach(sin: string, fName: string, lName: string, tName: string){
        const body: coach = {
            sin: sin,
            fName: fName,
            lName: lName,
            tName: tName
        }
        return this.http.put(`http://localhost:5131/api/Coach/${sin}`, body)
    }
    addCoach(Coach: coach){
        const body: coach = {
            sin: Coach.sin,
            fName: Coach.fName,
            lName: Coach.lName,
            tName: Coach.tName
        }
        return this.http.post(`http://localhost:5131/api/Coach`,body)
    }

    getCoaches(){
        return this.http.get(`http://localhost:5131/api/Coach`)
    }
}