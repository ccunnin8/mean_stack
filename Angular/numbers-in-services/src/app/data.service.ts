import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  num_alpha: Array<number> = []:
  num_beta: Array<number> = [];
  constructor() {

  }
  addAlpha(num: number): void {
    this.num_alpha.push(num);
  }
  addBeta(num: number): void{
    this.num_beta.push(num);
  }
  sum(): number {
    if (this.num_alpha.length > 0 && this.num_beta.length > 0){
      let a = this.num_alpha.reduce((a,b) => a + b);
      let b = this.num_beta.reduce((a,b)=> a + b);
      return a - b;
    } else {
      return 0;
    }
  }
  randomNum(): number {
    return Math.floor(Math.random() * 100);
  }
  getAlpha(): Array<number>{
    return this.num_alpha;
  }
  getBeta(): Array<number>{
    return this.num_beta;
  }
}
