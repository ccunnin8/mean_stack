import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Player } from "./manager-players/player";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  players: BehaviorSubject<Player[]> = new BehaviorSubject([]);
  constructor() {
  }
  getPlayers(): Player[]{
    return this.players.getValue();
  }
  addPlayer(player: Player): void{
    let temp = this.getPlayers();
    temp.push(player);
    this.players.next(temp);
  }
  update_player(id: string, status: number, game:string ): void{
    let temp = this.getPlayers();
    temp.map((x)=>{
      if (x.id === id){
        x.games[game] = status;
      }
    })
  }
}
