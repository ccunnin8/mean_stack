import { Component, OnInit } from '@angular/core';
import { Player } from './player/player';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  player1: string = "Player 1";
  player2: string = "Player 2";

  players: Player[];
  length_of_players: number;
  constructor(private _data: DataService, private _router: Router) { }

  ngOnInit() {
    this.players = [];
    this.length_of_players = 0;
  }

  addPlayer(player): void{
    this.players.push(player);
    this.length_of_players += 1;
  }

  battle(): void {
    const players = this.players;
    const winner = players[0].score > players[1].score ? players[0] : players[1]
    const loser = players[0].score < players[1].score ? players[0] : players[1]
    this._data.updatePlayers(winner,loser);
    this._router.navigate(["results"]);
  }
}
