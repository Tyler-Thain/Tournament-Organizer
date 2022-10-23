import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { participateIn } from "../classes/participateIn.model";



@Injectable()
export class participateServices{
    constructor(private http: HttpClient){}

    deleteParticipate(tName: string, tid: number){
        return this.http.delete(`http://localhost:5131/api/ParticipateIn/${tName}/${tid}`)
    }

    postParticipate(Particpate: participateIn){
        const body: participateIn = {
            tName: Particpate.tName,
            tid: Particpate.tid
        }
        return this.http.post(`http://localhost:5131/api/ParticipateIn`, body)
    }

    getParticipateIn(){
        return this.http.get(`http://localhost:5131/api/ParticipateIn`)
    }
}