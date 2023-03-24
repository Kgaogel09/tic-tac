import { Injectable } from '@angular/core';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Observable that tracks the current user's authentication state
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    // Set up the user$ Observable to track authentication state changes
    this.user$ = afAuth.authState;
  }

  // Authenticate the user using Google sign-in
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  // Authenticate the user using Facebook sign-in
  FacebookAuth() {
    return this.AuthLogin(new FacebookAuthProvider());
  }

  // Check whether the user is currently logged in
  isLoggedIn(): Observable<boolean> {
    return this.user$.pipe(map((user) => !!user));
  }

  // Authenticate the user using a given authentication provider
  AuthLogin(provider: any) {
    // Use Firebase's signInWithPopup method to display the authentication provider's sign-in screen as a popup
    return this.afAuth
      .signInWithPopup(provider)
      .then(() => {
        // Log a success message to the console
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        // Log any errors to the console
        console.log(error);
      });
  }

  // Log the user out of the application
  logout() {
    // Use Firebase's signOut method to log the user out
    return this.afAuth
      .signOut()
      .then(() => {
        this.router.navigate(['/login']);

        // Log a success message to the console
        console.log('You have been logged out!');
      })
      .catch((error) => {
        // Log any errors to the console
        console.log(error);
      });
  }
}
