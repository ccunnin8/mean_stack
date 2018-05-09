import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  nums: Array<number>;
  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.nums = this._dataservice.getAlpha();
  }
  add(){
    let num = this._dataservice.randomNum();
    this._dataservice.addAlpha(num);
  }
}
