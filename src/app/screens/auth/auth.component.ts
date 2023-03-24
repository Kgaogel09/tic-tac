import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoggedIn = this.authService.isLoggedIn();

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user$.subscribe((user) => {
      if (!!user) {
        this.router.navigate(['home']);
      }
    });
  }

  ngOnInit(): void {
    this.isLoggedIn.subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['/home']);
      }
    });
  }

  googleLogin() {
    this.authService.GoogleAuth();
  }

  facebookLogin() {
    this.authService.FacebookAuth();
  }

  logout() {
    this.authService.logout();
  }
}
