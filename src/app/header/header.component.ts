import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() sideBarOpened = new EventEmitter<boolean>();
  sidebarFlag: boolean = true;

  openSideBar(){
    this.sideBarOpened.emit(!this.sidebarFlag);
    // console.log(t);
  }
}
