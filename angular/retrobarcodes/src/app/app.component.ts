import { Component } from '@angular/core';

var colors: Array<String> = [];

function create_color(): Number {
  return Math.floor(Math.random()  * 255);
};

function create_rgb(): String {
   let red = create_color();
   let blue = create_color();
   let green = create_color();
   return `rgb(${red},${green},${blue})`;
}

for (let i = 0; i < 10; i++){
  colors.push(create_rgb());
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Retro Barcode Generator';
  colors: Array<String> = colors;
  onButtonClick(): void{
    alert("TEST");
  };
}
