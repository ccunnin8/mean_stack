import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Switchboard';
  switches: Object = {
    switch1: false,
    switch2: false,
    switch3: false,
    switch4: false,
    switch5: false,
    switch6: false,
    switch7: false,
    switch8: false,
    switch9: false,
    switch10: false
  };
  keys: Array<String> = Object.keys(this.switches);
  toggle(x): void {
    this.switches[x] = !this.switches[x];
  }
}
