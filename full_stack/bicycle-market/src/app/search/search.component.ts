import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../bicycle';
import { BicycleService } from '../bicycle.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bicycles: Bicycle[];

  constructor(private data: BicycleService ) { }

  ngOnInit() {
    this.data.all_bicycles.subscribe(x => this.bicycles = x);
  }

  search(){
    //filter list of bikes if searchbar has values else show all bikes

  }

}
