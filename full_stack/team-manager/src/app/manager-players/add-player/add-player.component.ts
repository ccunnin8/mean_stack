import { Component, OnInit } from '@angular/core';
import { Player } from "../player";
import { DataService } from "../../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: Player;
  constructor(private _data: DataService, private _router: Router) { }

  ngOnInit() {
    this.player = new Player();
  }

  onSubmit(event){
    event.preventDefault();
    this._data.addPlayer(this.player);
    this.player = new Player();
    this._router.navigate(["players","list"]);
  }

}
