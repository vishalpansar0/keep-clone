import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keep-clone';
  openSideMenu = true;

  operSideBar(flag: boolean){
      this.openSideMenu = this.openSideMenu ? this.openSideMenu=false: this.openSideMenu=true;
  }
}
