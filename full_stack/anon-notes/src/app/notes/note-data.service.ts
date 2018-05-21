import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http"
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteDataService {
  notes: BehaviorSubject<Note[]> = new BehaviorSubject([]);
  private uri: string = "/api/notes";
  constructor(private _http: HttpClient) {
    //get initial notes from API? load behavior object with notes from api
    this.getNotes();
  }

  addNote(note): void{
    this._http.post(this.uri,note).subscribe(
      (response)=> { this.getNotes(); }
    );
  }
  getNotes(): void {
    this._http.get(this.uri).subscribe(
      (response: Note[]) => {
        this.notes.next(response) }
    );
  }
}
