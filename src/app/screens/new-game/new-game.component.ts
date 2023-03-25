import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {
  user$ = this.authService.user$;
  playerName = new FormControl('', Validators.required);
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  startPlaying() {
    if (!this.playerName.valid) {
      this.playerName.markAsTouched();
      return;
    }
    localStorage.setItem('player2', JSON.stringify(this.playerName.value));
    this.router.navigate(['/active-game']);
  }
}
