import { Component, Input } from '@angular/core';
import { Note } from '../shared/note.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  editorFlag:boolean = true;
  editorBackgroundColor: string = 'transparent';
  colorPeleteCodes = ['#EC7063','#F7DC6F','#5DADE2','#48C9B0','#BB8FCE','#B2BABB']; 

  @Input() editNoteInput: Note = new Note(0,'','','');

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
}