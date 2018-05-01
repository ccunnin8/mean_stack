import { Component } from '@angular/core';


interface Email {
  email: String;
  importance: Boolean;
  subject: String;
  content: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: String = 'Dojo Mail';
  emails: Array<Email> = [
    {
      email: "bill@gates.com",
      importance: true,
      subject: "New Windows",
      content: "Windows XI will launch in the year 2100"
    },
    {
      email: "ada@lovelace.com",
      importance: true,
      subject: "Programming",
      content: "Enchantress of Numbers"
    },
    {
      email: "john@carmac.com",
      importance: false,
      subject: "Updated Algo",
      content: "New algorithm for shadow volumes"
    },
    {
      email: "gabe@newel.com",
      importance: false,
      subject: "HL3!",
      content: "Just kidding..."
    }
  ]
}
