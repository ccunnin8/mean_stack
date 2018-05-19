import { Component, OnInit } from '@angular/core';
import { NoteDataService } from "../note-data.service";
import { Note } from "../note";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[];
  constructor(private _notes: NoteDataService) { }

  ngOnInit() {
    this._notes.notes.subscribe((x) => this.notes = x );
  }

}
