import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  actions: Array<string>;
  constructor(private _dataservice: DataService) { }

  ngOnInit() {
    this.actions = this._dataservice.actions;
  }

}
