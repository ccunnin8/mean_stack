import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteDataService {
  notes: BehaviorSubject<Note[]> = new BehaviorSubject([]);

  constructor() {
    //get initial notes from API? load behavior object with notes from api
  }

  addNote(note): void{
    let temp = this.notes.getValue();
    temp.push(note);
    this.notes.next(temp);
    //save to api
  }
  getNotes(): void{
    return this.notes.getValue();
  }
}
