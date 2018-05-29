import { Component, OnInit, Input } from '@angular/core';
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
  @Input() player: string;
  constructor(private _data: DataService) { }

  ngOnInit() {
    this.user = new Player();
  }

  handleSubmit(e){
    try
    {
      this._data.getPlayer(this.user.username)
    }
    catch {
      this.error = true;
    }
  }


}
