import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: '../city_template/component.html',
  styleUrls: ['../city_template/component.css']
})
export class SanjoseComponent implements OnInit {
  weather: any;
  city: string;
  image: string;
  constructor(private _weather: WeatherService) {
    this.weather = this._weather.weather;
    this.city = "San Jose, CA";
    this.image = "https://images.pexels.com/photos/672912/pexels-photo-672912.jpeg?auto=compress&cs=tinysrgb&h=350";
    this._weather.getWeather("5392171");
  }

  ngOnInit() {
  }

}
