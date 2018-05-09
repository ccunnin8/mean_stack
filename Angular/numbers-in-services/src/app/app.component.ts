import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sum: number;
  constructor(private _dataservice: DataService){
  }
  getSum(){
    this.sum = this._dataservice.sum();
  }
}
