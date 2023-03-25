import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

interface Player {
  playerName: string;
  isWinner: boolean;
}

interface Game {
  players: Player[];
}

@Component({
  selector: 'app-pause-game',
  templateUrl: './pause-game.component.html',
  styleUrls: ['./pause-game.component.scss'],
})
export class PauseGameComponent {
  user$ = this.authService.user$;
  storedPlayer2 = localStorage.getItem('player2');

  player2 = this.storedPlayer2 ? JSON.parse(this.storedPlayer2) : null;

  constructor(private authService: AuthService) {}
}
