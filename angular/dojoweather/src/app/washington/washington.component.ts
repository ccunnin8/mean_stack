import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-washington',
  templateUrl: '../city_template/component.html',
  styleUrls: ['../city_template/component.css']
})
export class WashingtonComponent implements OnInit  {
  weather: any;
  city: string
  image: string;
  constructor(private _weather: WeatherService) {
    this.city = "Washington, DC";
    this.image = "https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
    this.weather = this._weather.weather;
    this._weather.getWeather("4140963");
  }

  ngOnInit() {
  }

}
