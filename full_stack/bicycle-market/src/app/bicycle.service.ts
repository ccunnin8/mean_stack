import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Bicycle } from './bicycle';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {
  api_url: string = "http://localhost:8000/api";
  bicycles_url: string = this.api_url + "/bicycles";
  user_bicycles: BehaviorSubject<Bicycle[]> = new BehaviorSubject<Bicycle[]>([]);
  all_bicycles: BehaviorSubject<Bicycle[]> = new BehaviorSubject<Bicycle[]>([]);

  constructor(private http: HttpClient) { }

  //add a new bike to users bikes
  add_new_bike(bike){
    this.http.post(this.bicycles_url, bike).subscribe((data)=>{
      if (data["error"]){
        console.log("an error occured");
      } else {
        this.get_user_bikes();
      }
    })
  }
  //update bike
  update_bike(bike){

  }
  //get all bikes from all users
  get_all_bikes(){
    this.http.get(this.bicycles_url).subscribe((data)=>{
      if (data["error"]) {
        console.log("an error occured");
      } else {
        this.all_bicycles.next(data["bicycles"]);
      }
    })
  }
  //get all bikes that belong to logged in user
  get_user_bikes(){
    this.http.get(this.bicycles_url + "/user").subscribe((data)=> {
      if (data["error"]){
        console.log("error occured");
      } else {
        this.user_bicycles.next(data["bicycles"]);
      }
    });
  }
}
