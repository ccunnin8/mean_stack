import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './player';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  user: Player;
  error: boolean;
  data: any;
  @Output() addPlayer = new EventEmitter();
  @Input() player: string;
  constructor(private _data: DataService) { }

  ngOnInit() {
    this.user = new Player();
  }

  handleSubmit(e){
      this._data.getPlayer(this.user.username).then((data)=>{
        const new_player = this._data.createPlayer(data);
        this.user = new_player;
        this.addPlayer.emit(new_player);
      }).catch((error)=>{
        this.error = true;
      })
  }


}
