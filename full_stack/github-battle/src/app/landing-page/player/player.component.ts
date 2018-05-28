import { Component, OnInit, Input } from '@angular/core';
import { Player } from './player';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  user: Player;

  @Input() player: string;
  constructor() { }

  ngOnInit() {
    this.user = new Player();
  }

  handleSubmit(e){
    console.log(this.user);
  }

}
