import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './landing-page/player/player';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "https://api.github.com/users"
  constructor(private _http: HttpClient) { }

  getPlayer(username){
    this._http.get(`${this.url}/${username}`).subscribe((data)=>{
      console.log(data)
    },
    error => {console.log(error)})
  }
}
