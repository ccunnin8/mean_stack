import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;
  constructor(private _route: ActivatedRoute, private _weather: WeatherService) {
    this.weather = this._weather.weather;
    this._route.paramMap.subscribe((params)=>{
      _weather.getWeather(params.get("city"));
    });
  }

  ngOnInit() {
  }

}
