import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../bicycle';
import { BicycleService } from '../bicycle.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  bicycle: Bicycle;
  bicycles: Bicycle[];
  constructor(private data: BicycleService, private user: DataService) { }

  ngOnInit() {
    this.bicycle = new Bicycle();
    //get all users bicycles from api
    this.data.user_bicycles.subscribe(x => this.bicycles = x);
    this.data.get_user_bikes();
  }

  add_new_bike(event){
    event.preventDefault();
    this.data.add_new_bike(this.bicycle);
    this.bicycle = new Bicycle();
  }
  update_bicycle(event){
    //update bike in users bicycles
  }

}
