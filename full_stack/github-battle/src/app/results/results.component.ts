import { Component, OnInit } from '@angular/core';
import { Player } from '../landing-page/player/player';
import { DataService } from '../data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  winner: Player;
  loser: Player;
  constructor(private _data: DataService) { }

  ngOnInit() {
    this.winner = this._data.winner;
    this.loser = this._data.loser;
  }

}
