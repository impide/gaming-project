import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StateRegisterService } from '../../animations/register-animation';
import { Data } from '../../models/user/data/data.model';
import { userModel } from '../../models/user/user.model';
import { SnackbarService } from './snack-service/snack.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // api & token 
  api =  environment.api;
  token!: string;

  constructor(
    private http: HttpClient,
    private snackbar: SnackbarService,
    public stateRegister: StateRegisterService,
  ) { }

  signup(user: userModel) {
    return this.http.post(this.api + '/users/signup', user ).subscribe(
      (userData: Data ) => {
        if (userData.status === 201){
          this.snackbar.openSnackBar('user Created Succesfully !', 3);
          this.stateRegister.toLoginState();
        } else {
          this.snackbar.openSnackBar('Error ', 5)
        }
      }
    )
  }
}
