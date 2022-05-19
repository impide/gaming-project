import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userModel } from '../../core/models/user/user.model';
import { AuthService } from '../../core/services/auth-services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  // Submit Form
  onSignup(form: NgForm) {
    const newUser = new userModel();
    newUser.username = form.value.username;
    newUser.email = form.value.email;
    newUser.password = form.value.password;
    this.authService.signup(newUser);
    form.reset()
  }

}
