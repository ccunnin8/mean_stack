import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../weather.service";
@Component({
  selector: 'app-burbannk',
  templateUrl: '../city_template/component.html',
  styleUrls: ['../city_template/component.css']
})
export class BurbannkComponent implements OnInit {
  weather: any;
  city: string;
  image: string;
  constructor(private _weather: WeatherService) {
    this.city = "Burbank, CA";
    this.weather = this._weather.weather;
    this.image = 'https://images.pexels.com/photos/1049302/pexels-photo-1049302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
    this._weather.getWeather("4885983");
  }

  ngOnInit() {
  }

}
