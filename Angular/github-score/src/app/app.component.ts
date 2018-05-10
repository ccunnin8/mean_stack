import { Component } from '@angular/core';
import { GithubService } from "./github.service";
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profile: BehaviorSubject<any>;
  username: string;
  total: number;
  constructor(private _github: GithubService){

  }
  ngOnInit(){
    this.profile = this._github.profile;
    this._github.score.subscribe( x => this.total = x);
  }
  submitForm(){
    this._github.getProfile(this.username);
  }
}
