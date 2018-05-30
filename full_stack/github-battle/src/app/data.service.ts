import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './landing-page/player/player';
import { BehaviorSubject } from 'rxjs';
import uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "https://api.github.com/users";
  winner: Player;
  loser: Player;
  //must get initially grab usernames from database;
  player_names: Array<string> = [];
  players: BehaviorSubject<Player[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getPlayer(username) {
    return new Promise((resolve,reject)=>{
        this._http.get(`${this.url}/${username}`).subscribe((data)=>{
        resolve(data);
      },
        error => { reject(error) } )
      })
    }

  //have to change to update database with username values if they don't exist!
  updatePlayers(winner,loser): void{
    this.winner = winner;
    this.loser = loser;
    if (!this.player_names.includes(winner.username)){
      this.player_names.push(winner.username);
    }
    if (!this.player_names.includes(loser.username)){
      this.player_names.push(loser.username);
    }
  }

  createPlayer(data): Player {
    let player = new Player()
    player.username = data['login'];
    player.photo = data['avatar_url'];
    player._id = uuid();
    player.score = (data['public_repos'] + data['followers']) * 12;
    return player;
  }
  //using async because each callback in map uses an async get call to the github api
  // and i want to be working with a complete list when I sort the list by score
  getPlayersList() {
    Promise.all(this.player_names.map((username)=>{
      return this._http.get(`${this.url}/${username}`).toPromise().then(data => this.createPlayer(data));
    })).then((players)=>{
      const sorted_players = players.sort((a,b)=>{
        return b['score'] - a['score'];
      });
      console.log(sorted_players);
      this.players.next(sorted_players);
    });
  }
}
