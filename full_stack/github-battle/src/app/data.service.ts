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
  api_url: string = "/api/players";
  winner: Player;
  loser: Player;
  //must get initially grab usernames from database;
  player_names: BehaviorSubject<Array<string>>= new BehaviorSubject([]);
  players: BehaviorSubject<Player[]> = new BehaviorSubject([]);

  //initialize list of players with players that have already been added to database
  constructor(private _http: HttpClient) {
    this.get_usernames_from_db();
  }

  //GETS DATA FROM GITHUB API USING THE USERNAME
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
  //could be DRYer but this way it's readable
    this.winner = winner;
    this.loser = loser;
    this._http.post(this.api_url, { username: winner.username }).subscribe((x)=>{
      this._http.post(this.api_url, { username: loser.username }).subscribe((x)=> {
        this.get_usernames_from_db();
      });
    });
  }

  //CREATES A PLAYER OBJECT TO BE USED BY COMPONENTS/VIEWS
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
    Promise.all(this.get_player_names().map((username)=>{
      return this._http.get(`${this.url}/${username}`).toPromise().then(data => this.createPlayer(data));
    })).then((players)=>{
      const sorted_players = players.sort((a,b)=>{
        return b['score'] - a['score'];
      });
      this.players.next(sorted_players);
    });
  }

  get_usernames_from_db(){
    this._http.get(this.api_url).subscribe((usernames)=>{
      this.player_names.next(usernames['usernames']);
      this.getPlayersList();
    });
  }

  get_player_names(): Array<string>{
    return this.player_names.getValue();
  }
}
