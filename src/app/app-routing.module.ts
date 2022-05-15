import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGamesComponent } from './components/main-games/main-games.component';
import { MainSpaceComponent } from './components/main-space/main-space.component';

const routes: Routes = [
  { path: '', redirectTo: 'main-space', pathMatch: 'full' },
  { path: 'main-space', component: MainSpaceComponent },
  {
    path: 'main-games',
    component: MainGamesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
