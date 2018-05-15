import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weather: BehaviorSubject<any> = new BehaviorSubject([]);
  url: string = "http://api.openweathermap.org/data/2.5/weather?id="
  appid: string = "&appid=1beca26b93421c07ef161fb32e6c38ce"
  constructor(private _http: HttpClient) { }
  getWeather(name){
    this._http.get(this.url + name + this.appid).subscribe((data)=> { this.weather.next(data)});
  }
}
