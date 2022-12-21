import { Injectable } from '@angular/core';
import { Note } from '../shared/note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes = [
    new Note(1,'hello','hi this is a test note. it is the first note of this app, first','#EC7063'),
    new Note(2,'hello','hi this is a test note. it is the first note of this app, second','#E59866'),
    new Note(3,'hello','hi this is a test note. it is the first note of this app','#5DADE2'),
    new Note(4,'hello','hi this is a test note. it is the first note of this app','#48C9B0'),
    new Note(5,'hello','hi this is a test note. it is the first note of this app','#BB8FCE'),
    new Note(6,'hello','hi this is a test note. it is the first note of this app','#B2BABB')
  ];

  trash:Note[] = []

  // notes: Note[] = []
  
  constructor() { }

  getNotes():Note[]{
    return this.notes;
  }

  saveNote(value: Note){
    let flag = false;
    let lastId = 0;
    this.notes.forEach(note => {
      if(note.id == value.id){
        note.color = value.color;
        note.title = value.title;
        note.text = value.text;
        flag = true;
      }
      if(lastId<note.id){
        lastId = note.id;
      }
    });
    if(!flag){
      value.id = +(lastId)+1;
      this.notes.unshift(value)
    }
  }

  deleteNote(note:Note){
    this.notes.forEach((n,k) => {
      if(note.id==n.id){
        this.notes.splice(k,1);
        this.trash.push(note);
      }
    });
  }

  makeCopyNote(note:Note){
    let lastId = 0;
    this.notes.forEach(n => {
      if(lastId<n.id){
        lastId = n.id;
      }
    });
    // note.title = 'copy - '+note.title;
    note.id = +(lastId)+1;
    this.notes.unshift(note)
  }
}
