import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  nums: Array<number>;
  constructor(private _dataservice: DataService ) { }

  ngOnInit() {
    this.nums = this._dataservice.getBeta();
  }
  add() {
    let num = this._dataservice.randomNum();
    this._dataservice.addBeta(num);
  }
}
