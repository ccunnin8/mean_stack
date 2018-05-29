import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './player';
import { DataService } from '../../data.service';
import uuid from 'uuid';

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
        this.user.username = data.login;
        this.user.photo = data.avatar_url;
        this.user._id: uuid();
        this.user.score = (data.public_repos + data.followers) * 12;
        this.addPlayer.emit(this.user);
      }).catch((error)=>{
        this.error = true;
      })
  }


}
