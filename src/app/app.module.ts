import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { AuthComponent } from './screens/auth/auth.component';
import { HomeComponent } from './screens/home/home.component';
import { NewGameComponent } from './screens/new-game/new-game.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, AuthComponent, HomeComponent, NewGameComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
