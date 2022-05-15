import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainRegisterComponent } from '../../main-register/main-register.component';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.dialog.open(MainRegisterComponent, {
      panelClass: ['col-12', 'col-sm-8', 'col-md-6', 'col-lg-5', 'col-xl-4', 'col-xxl-4', 'animate__animated', 'animate__slideInUp'],
      disableClose: true
    })
  }

}
