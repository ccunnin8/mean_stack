import { Component } from '@angular/core';

const time_diff: Object = {
  "PST": -3,
  "EST": 0,
  "CST": -1,
  "MST": -2
}

function addHours(h): Object {
  let date = new Date();
  date.setTime(date.getTime() + (h*60*60*1000))
  return date;
}

function clear(): void {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'US Time Zone Display';
  date: Object = new Date();
  EST: boolean = false;
  MST: boolean = false;
  CST: boolean = false;
  PST: boolean = false;

  changeTime(t,p): void {
    this.date = addHours(time_diff[t]);
    this.clear();
    this[`${t}`] = true;
  }

  clear(): void {
    let timezones = ["EST","CST","MST","PST"];
    for (let i = 0; i < timezones.length; i++){
      this[timezones[i]] = false;
    }
  }

}
