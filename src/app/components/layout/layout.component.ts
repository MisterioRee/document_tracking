import { Component } from '@angular/core';
import { navItems } from './navs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;


  toggleMinimize(e) {
    // console.log(e);
    // this.sidebarMinimized = !this.sidebarMinimized;
  }


 
}
