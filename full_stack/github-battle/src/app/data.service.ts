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
    return new Promise((resolve,reject)=>{
        this._http.get(`${this.url}/${username}`).subscribe((data)=>{
        resolve(data);
      },
        error => { reject(error) } )
      })
    }
}
