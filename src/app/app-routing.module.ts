import { ActiveGameComponent } from './screens/active-game/active-game.component';
import { NewGameComponent } from './screens/new-game/new-game.component';
import { HomeComponent } from './screens/home/home.component';
import { AuthComponent } from './screens/auth/auth.component';
import { LoginComponent } from './screens/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { PauseGameComponent } from './screens/pause-game/pause-game.component';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'new-game',
    component: NewGameComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'active-game',
    component: ActiveGameComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pause-game',
    component: PauseGameComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
