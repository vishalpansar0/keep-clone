import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {
  @Output() editorFlagChange =  new EventEmitter<boolean>();
  editorBackgroundColor: string = 'transparent';
  colorPeleteCodes = ['#EC7063','#E59866','#5DADE2','#48C9B0','#BB8FCE','#B2BABB']; 

  @Input() editNoteValues: Note = new Note(0,'','','#202124');

  constructor(private noteService: NotesService){
  }

  closeEditor(){
    if(this.editNoteValues.text !== ''){
      this.noteService.saveNote(this.editNoteValues);
    }
    this.editorFlagChange.emit();
  }



  setColor(color: string){
    if (this.editNoteValues.color === color) {
      this.editNoteValues.color = '#202124';
    } else {
      this.editNoteValues.color = color;
    }
    
  }
}
