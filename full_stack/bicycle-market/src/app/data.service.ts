import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  api_url: string = "http://localhost:8000/api";
  users_url: string = this.api_url + "/users";
  bicycles_url: string = this.api_url + "/bicycles";
  login_errors: Subject<string> = new Subject();
  register_errors: Subject<string> = new Subject();
  current_user: string;
  constructor(private http: HttpClient, private router: Router) { }

  login(email,password){
    this.http.post(this.users_url + "/login", { email, password }).subscribe((data)=>{
      if (data["error"]) {
        this.login_errors.next(data["error"]);
      } else {
        this.current_user = data["username"];
        this.router.navigate(["browse"]);
      }
    })
  }
  register(user){
    this.http.post(this.users_url + "/register",user).subscribe((data)=>{
      if (data["error"]) {
        console.log("there was an error");
        this.register_errors.next(data["error"]);
      } else {
        console.log("user created");
        this.current_user = data["username"];
        this.router.navigate(["browse"]);
      }
    });
  }
  logout(){
    this.http.get(this.users_url + "/logout").subscribe((data)=>{
      this.current_user = "";
      this.router.navigate([""]);
    })
  }
}
