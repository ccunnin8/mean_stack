import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Player } from "../player";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.players.subscribe(data => this.players = data );
  }

}
