import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterAnimation, StateRegisterService } from '../core/animations/register-animation';

@Component({
  selector: 'app-main-register',
  templateUrl: './main-register.component.html',
  styleUrls: ['./main-register.component.scss'],
  animations: [RegisterAnimation]
})
export class MainRegisterComponent implements OnInit {
  @Output() fromRegisterToHome = new EventEmitter<boolean>();

  constructor(
    public dialog: MatDialog,
    public stateRegister: StateRegisterService,
  ) { }

  ngOnInit(): void {
  }

  // Transition Sign in to Log in
  tologIn() {
    this.stateRegister.toLoginState();
  }

  // Transition Log in to Sign in
  tosignIn() {
    this.stateRegister.toSignInState();
  }

  closeModal() {
    this.dialog.closeAll();
  }

}
