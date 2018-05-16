import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: '../city_template/component.html',
  styleUrls: ['../city_template/component.css']
})
export class DallasComponent implements OnInit {
  weather: any;
  city: string;
  image: string;
  constructor(private _weather: WeatherService) {
    this.city = "Dallas, TX";
    this.weather = this._weather.weather;
    this.image = "https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?auto=compress&cs=tinysrgb&h=350";
    this._weather.getWeather("4684888");
  }

  ngOnInit() {
  }

}
