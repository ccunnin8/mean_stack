import { Component, OnInit } from '@angular/core';
import { Player } from './player/player';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  player1: string = "Player 1";
  player2: string = "Player 2";

  constructor() { }

  ngOnInit() {
  }


}
