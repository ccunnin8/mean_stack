import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string;
  weather: any;
  constructor(private _route: ActivatedRoute, private _weather: WeatherService) {
    this._route.paramMap.subscribe((params)=>{
      if (params.get("city")) {
        this.city = params.get("city");
      } else {
        this.city = "washington";
      }
      _weather.getWeather(this.city);
    });
  }

  ngOnInit() {
  }

}
