import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  total: number;
  actions: Array<string>;
  totalChange: Subject<number> = new Subject<number>();
  constructor() {
    this.actions = [];
    this.total = 0;
  }
  genRandom(from: number,to: number): number{
    return Math.floor(Math.random() * (to-from)) + from
  }
  updateTotal(num: number): void {
    this.total += num;
    this.totalChange.next(this.total);
  }
  action(action:string): void{
    let amount: number;
    switch(action){
      case "farm":
        amount = this.genRandom(2,5);
        break;
      case "cave":
        amount = this.genRandom(5,10);
        break;
      case "casino":
        amount = this.genRandom(-100,100);
        break;
      case "house":
        amount = this.genRandom(7,15);
        break;
    }
    this.updateTotal(amount);
    let verb = (amount < 0) ? "lost" : "earned"
    let data = "You've " + verb + " " + Math.abs(amount) + " at " + action;
    this.actions.push(data);
  }
}
