import { Component} from '@angular/core';
import { NotesService } from './services/notes.service';
import { Note } from './shared/note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keep-clone';
  editorFlag:boolean = false;
  openEditorFlag:boolean = true;
  openSideMenu = false;
  selectedNote: Note = new Note(0,'','',''); 
  notes: Note[] = [];

  constructor (private notesService: NotesService){
    this.notes = this.notesService.getNotes();
  }

  operSideBar(flag: boolean){
      this.openSideMenu = this.openSideMenu ? this.openSideMenu=false: this.openSideMenu=true;
  }

  editNote(note:Note){
    this.selectedNote = note;
    this.openEditorFlag = false;
  }

  openEditor(){
    this.openEditorFlag = true;
    console.log('hi')
  }

}
