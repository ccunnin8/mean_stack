import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  profile: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  score: Subject<number> = new Subject<number>();
  private url: string = "https://api.github.com/users/";

  constructor(private _http: HttpClient) { }

  updateScore(repos: number,followers: number){
    this.score.next(repos + followers);
  }

  getProfile(name){
    this._http.get(this.url + name).subscribe((data: any)=>{
        let { public_repos, followers } = data;
        this.profile.next(data)
        this.updateScore(public_repos,followers);
      },
      (error)=>{
        this.profile.next("error");
      })
    }
}
