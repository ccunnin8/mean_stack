import { Component, OnInit } from '@angular/core';
import { Player } from '../landing-page/player/player';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  players: Player[];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.getPlayersList();
    this._data.players.subscribe(players => this.players = players );
  }

}
