import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // isActiveGame: boolean = false;
  user$ = this.authService.user$;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
