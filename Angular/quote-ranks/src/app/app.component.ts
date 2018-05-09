import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Array<Quote>;
  new_quote: Quote;
  constructor(){
    this.new_quote = new Quote();
    this.quotes = [];
  }
  addQuote() {
    this.quotes.push(this.new_quote);
    this.new_quote = new Quote();
  }
  update(event){
    let { id, n } = event;
    let index = this.quotes.findIndex( e => e.id === id );
    this.quotes[index].votes += n;
    this.quotes.sort((a,b)=>{
      if (a.votes > b.votes) {
        return -1
      }
      else if (a.votes < b.votes){
        return 1;
      }
      return 0;
    });
  }
  delete(id){
    this.quotes = this.quotes.filter(e => e.id !== id );
  }
}
