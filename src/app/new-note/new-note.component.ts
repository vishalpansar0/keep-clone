import { Component } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent {
  editorFlag:boolean = true;

  openEditor(){
    this.editorFlag = !this.editorFlag
  }

  adjustHeight(el:Event){
    console.log(el);
    // el.style.height = (el.scrollHeight > el.clientHeight) ? (el.scrollHeight)+"px" : "60px";
    // console.log('hello')
}
}
