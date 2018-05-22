import { Component, OnInit } from '@angular/core';
import { Player } from "../player";
import { DataService } from "../../data.service";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: Player;
  constructor(private _data: DataService) { }

  ngOnInit() {
    this.player = new Player();
  }

  onSubmit(event){
    event.preventDefault();
    this._data.addPlayer(this.player);
    console.log(this.player);
    this.player = new Player();
  }

}
