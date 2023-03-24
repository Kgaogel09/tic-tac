import { ActiveGameComponent } from './screens/active-game/active-game.component';
import { NewGameComponent } from './screens/new-game/new-game.component';
import { HomeComponent } from './screens/home/home.component';
import { AuthComponent } from './screens/auth/auth.component';
import { LoginComponent } from './screens/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'new-game',
    component: NewGameComponent,
  },
  {
    path: 'active-game',
    component: ActiveGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
