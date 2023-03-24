import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { HomeComponent } from './screens/home/home.component';
import { NewGameComponent } from './screens/new-game/new-game.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { ActiveGameComponent } from './screens/active-game/active-game.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';
import { AuthGuard } from './services/auth-guard.service';
import { WinnerComponent } from './screens/winner/winner.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    HomeComponent,
    NewGameComponent,
    ActiveGameComponent,
    BoardComponent,
    SquareComponent,
    WinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
