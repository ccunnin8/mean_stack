import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: [Quote];
  new_quote: Quote;
  constructor(){
    this.new_quote = new Quote();
  }
  addQuote(){
    console.log(this.new_quote);
    // this.quotes.push(this.quote);
    this.new_quote = new Quote("","");
  }
}
