import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount: number = 5280;
  units: string = "feet";
  active: string = "";
  convert(type): void {
    switch(type) {
      case "f":
        this.amount = 5280;
        this.units = "feet"
        this.active = "feet"
        break;
      case "y":
        this.amount = 1760;
        this.units = "yards"
        this.active= "yards";
        break;
      case "i":
        this.amount = 63360;
        this.units = "inches";
        this.active = "inches";
        break;
      case "k":
        this.amount = 1.609;
        this.units = "kilometers";
        this.active= "kilometers";
        break;
      case "m":
        this.amount = 1609;
        this.units = "meters";
        this.active = "meters";
        break;
      };
    }
  clear(): void{
    this.active = "";
  }
}
