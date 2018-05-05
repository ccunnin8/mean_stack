import { Component } from '@angular/core';
import { Petsitter } from './petsitter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  petsitter: Petsitter;
  request: Petsitter;
  constructor() {
    this.petsitter = new Petsitter();
  }
  onSubmit() {
    this.request = this.petsitter;
    this.petsitter = new Petsitter();
  }
}
