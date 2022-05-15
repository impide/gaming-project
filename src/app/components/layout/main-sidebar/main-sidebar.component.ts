import { Component, OnInit } from '@angular/core';
import { IconSidebar, MainSidebarIcons, OtherSidebarIcons } from '../../core/data/mainSidebar-icons';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Icon Sidebar
  iconsSidebar: IconSidebar[] = MainSidebarIcons;
  otherIconsSidebar: IconSidebar[] = OtherSidebarIcons;


}


