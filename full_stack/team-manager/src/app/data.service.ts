import { Injectable } from '@angular/core';
import { BehaviorSubject} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Player } from "./manager-players/player";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  players: BehaviorSubject<any> = new BehaviorSubject([]);
  url: string = "api/players";

  constructor(private _http: HttpClient) {
    this.getPlayers();
  }
  getPlayers(): void{
    this._http.get(this.url).subscribe(data => this.players.next(data));
  }
  addPlayer(player: Player): void{
    this._http.post(this.url,player).subscribe(res => this.getPlayers());
  }
  update_player(id: string, status: number, game:string ): void{
    // let temp = this.players.getValue();
    // temp.map((x)=>{
    //   if (x._id === id){
    //     x.games[game] = status;
    //   }
    // })
    this._http.put(`${this.url}/${id}`, {game,status}).subscribe((res) =>{
      this.getPlayers();
    });
  }
  deletePlayer(id: string){
    this._http.delete(`${this.url}/${id}`).subscribe((data)=>{
      this.getPlayers();
    });
  }
}
