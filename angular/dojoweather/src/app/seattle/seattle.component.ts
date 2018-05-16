import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-seattle',
  templateUrl: '../city_template/component.html',
  styleUrls: ['../city_template/component.css']
})
export class SeattleComponent implements OnInit {
  weather: any;
  city: string;
  image: string;
  constructor(private _weather: WeatherService) {
    this.weather = this._weather.weather;
    this.city = "Seattle, WA";
    this.image = "https://images.pexels.com/photos/656195/pexels-photo-656195.jpeg?auto=compress&cs=tinysrgb&h=350";
    this._weather.getWeather("5809844");
  }

  ngOnInit() {
  }

}
