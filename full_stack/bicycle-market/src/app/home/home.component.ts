import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../bicycle';
import { User } from '../user';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  login_user: User;
  bicycle: Bicycle;
  login_errors: string;
  register_errors: string;
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    this.login_user = new User();
    this.data.login_errors.subscribe(x => this.login_errors = x);
    this.data.register_errors.subscribe(x => this.register_errors = x);
    //get random bike from data service
  }

  register(event): void{
    event.preventDefault();
    //use data service to register new user
    this.data.register(this.user)
  }

  login(event): void {
    event.preventDefault();
    //use data service to login user, store userid, email, logged_in in session and angular
    const { email, password } = this.login_user;
    this.data.login(email,password);
  }
}
