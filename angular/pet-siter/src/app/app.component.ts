import { Component } from '@angular/core';
import { Petsitter } from './petsitter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  petsitter: Petsitter = new Petsitter();
  onSubmit(): void {
    this.petsitter = new Petsitter();
  }
}
