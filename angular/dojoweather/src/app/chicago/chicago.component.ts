import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: '../city_template/component.html',
  styleUrls: ['../city_template/component.css']
})
export class ChicagoComponent implements OnInit {
  weather: any;
  city: string;
  image: string;
  constructor(private _weather: WeatherService) {
    this.city = "Chicago, IL";
    this.image = "https://images.pexels.com/photos/1058759/pexels-photo-1058759.jpeg?auto=compress&cs=tinysrgb&h=350";
    this.weather = this._weather.weather;
    this._weather.getWeather("4887398")
  }

  ngOnInit() {
  }

}
