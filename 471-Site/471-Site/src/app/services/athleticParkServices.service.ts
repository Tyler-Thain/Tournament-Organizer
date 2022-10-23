import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { athleticPark } from "../classes/athleticPark.model";



@Injectable()
export class athleticParkServices{
    constructor(private http: HttpClient){}

    deleteAthleticPark(parkID: number){
        return this.http.delete(`http://localhost:5131/api/AthleticPark/${parkID}`)
    }

    updateAthleticPark(parkID: number, name: string, address: string){
        const body: athleticPark = {
            parkID: parkID,
            name: name,
            address: address
        }
        return this.http.put(`http://localhost:5131/api/AthleticPark/${parkID}`, body)
    }

    postAthleticPark(AthleticPark: athleticPark){
        const body: athleticPark = {
            parkID: AthleticPark.parkID,
            name: AthleticPark.name,
            address: AthleticPark.address
        }
        return this.http.post(`http://localhost:5131/api/AthleticPark`,body)
    }

    getAthleticParks(){
        return this.http.get(`http://localhost:5131/api/AthleticPark`)
    }
}