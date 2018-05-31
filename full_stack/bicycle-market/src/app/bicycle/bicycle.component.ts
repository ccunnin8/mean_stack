import { Component, OnInit, Input } from '@angular/core';
import { Bicycle } from '../bicycle';

@Component({
  selector: 'app-bicycle',
  templateUrl: './bicycle.component.html',
  styleUrls: ['./bicycle.component.css']
})
export class BicycleComponent implements OnInit {
  @Input() bicycle: Bicycle;
  constructor() { }

  ngOnInit() {
  }

}
