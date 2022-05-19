import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxStarRatingModule } from 'ngx-star-rating';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { MainSpaceComponent } from './components/main-space/main-space.component';
import { MainNavbarComponent } from './components/layout/main-navbar/main-navbar.component';
import { MainSidebarComponent } from './components/layout/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './components/layout/main-footer/main-footer.component';
import { MainRegisterComponent } from './components/main-register/main-register.component';
import { SignupComponent } from './components/main-register/signup/signup.component';
import { LoginComponent } from './components/main-register/login/login.component';
import { MainGamesComponent } from './components/main-games/main-games.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSpaceComponent,
    MainNavbarComponent,
    MainSidebarComponent,
    MainFooterComponent,
    MainRegisterComponent,
    SignupComponent,
    LoginComponent,
    MainGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    NgxStarRatingModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
