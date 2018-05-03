import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Currency Chart';
  currency: number = 1;
  cny: number = 6;
  eur: number = 0.90;
  rub: number = 58;
  gbp: number = 0.75;
}
