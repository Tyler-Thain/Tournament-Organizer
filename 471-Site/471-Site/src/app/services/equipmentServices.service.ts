import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { equipment } from "../classes/equipment.model";



@Injectable()
export class equipmentServices{
    constructor(private http: HttpClient){}

    deleteEquipment(equipID: number){
        return this.http.delete(`http://localhost:5131/api/Equipment/${equipID}`)
    }

    updateEquipment(equipID: number, sport: string, parkID: number, gameID: number){
        const body: equipment = {
            equipID: equipID,
            sport: sport,
            parkID: parkID,
            gameID: gameID
        }
        return this.http.put(`http://localhost:5131/api/Equipment/${equipID}`, body)
    }
    addEquipment(Equipment:equipment){
        const body: equipment = {
            equipID: Equipment.equipID,
            sport: Equipment.sport,
            parkID: Equipment.parkID,
            gameID: Equipment.gameID
        } 
        return this.http.post(`http://localhost:5131/api/Equipment`, body)
    }

    getEquipment(){
        return this.http.get(`http://localhost:5131/api/Equipment`)
    }
}