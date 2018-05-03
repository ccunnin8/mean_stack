import { Component } from '@angular/core';
import { Account } from './account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  account: Account = new Account();
  registered_user: Account;
  onSubmit(f) {
    this.registered_user = this.account;
    this.account = new Account;
  }
}
