import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
  }

  cave(){
    this._dataservice.action("cave");
  }
  farm(){
    this._dataservice.action("farm");
  }
  house(){
    this._dataservice.action("house");
  }
  casino(){
    this._dataservice.action("casino");
  }
}
