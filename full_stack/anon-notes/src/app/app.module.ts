import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NewNoteComponent } from './notes/new-note/new-note.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteComponent } from './notes/note-list/note/note.component';
import { NoteDataService } from "./notes/note-data.service";

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NewNoteComponent,
    NoteListComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NoteDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
