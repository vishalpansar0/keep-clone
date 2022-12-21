import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../shared/note.model';
// import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  @Output() onClickText = new EventEmitter<Note>();
  editorFlag:boolean = true;
  editorBackgroundColor: string = 'transparent';
  colorPeleteCodes = ['#EC7063','#F7DC6F','#5DADE2','#48C9B0','#BB8FCE','#B2BABB']; 

  @Input() note: Note = new Note(0,'','','');

  constructor(private notesService:NotesService){}

  openEditor(){
    this.editorFlag = !this.editorFlag
  }

  setColor(color: string){
    if (this.editorBackgroundColor === color) {
      this.editorBackgroundColor = 'transparent';
    } else {
      this.editorBackgroundColor = color;
    }
  }

  event(type: string){
    if (type === 'delete'){
      this.notesService.deleteNote(this.note);
    } else if (type === 'contentCopy') {
      navigator.clipboard.writeText(this.note.text);
    }else if (type === 'makeCopy') {
      this.notesService.makeCopyNote(this.note);
    }
  }

  clickedOnText(){
    this.onClickText.emit(this.note);
  }
}
