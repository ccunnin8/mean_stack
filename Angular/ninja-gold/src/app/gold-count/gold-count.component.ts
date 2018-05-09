import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gold-count',
  templateUrl: './gold-count.component.html',
  styleUrls: ['./gold-count.component.css']
})
export class GoldCountComponent implements OnInit {
  total: number;
  constructor(private _dataservice: DataService) {
    _dataservice.totalChange.subscribe(x => this.total = x);
  }

  ngOnInit() {
    this.total = this._dataservice.total;
  }

}
