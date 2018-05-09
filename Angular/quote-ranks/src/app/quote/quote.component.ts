import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote: object;
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }

  voteUp(){
    let { id }  = this.quote;
    this.update.emit({n: 1, id });
  }
  voteDown(){
    let { id } = this.quote;
    this.update.emit({n: -1, id });
  }
  delete_quote(){
    let { id } = this.quote;
    this.delete.emit(id);
  }
}
